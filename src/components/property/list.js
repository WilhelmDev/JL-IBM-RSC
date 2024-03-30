"use client";
import React, { useState, useEffect } from "react";
import Pagination from "@/components/common/list/pagination";
import TableProperty from "./table";
import { parsePagination } from "@/utilis/parsers";
import FilterButtons from "./atom-components/filterButtons";
import { getPropertiesList } from "@/core/infrastructure/services/tab-agent.service";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function List() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1);
  const [lastPage, setLastPage] = useState(1);
  const [range, setRange] = useState("");
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [sort, setSort] = useState(searchParams.get("sort_by") || "title");
  const [order, setOrder] = useState(searchParams.get("sort_order") || "asc");

  const fetchProperties = async (page, search, sort, order) => {
    try {
      const { data, meta } = await getPropertiesList(page, search, sort, order);
      const { allPages, range, lastPage } = parsePagination(
        meta,
        "Propiedades"
      );
      setRange(range);
      setPages(allPages);
      setLastPage(lastPage);
      setProperties(data);
    } catch (error) {
      setProperties(undefined);
    }
  };

  const handleChange = (newPage, newSearchTerm, newSort, newOrder) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchTerm = newSearchTerm != null ? newSearchTerm : search;
    newSort = newSort != null ? newSort : sort;
    newOrder = newOrder != null ? newOrder : order;
    newSearchParams.set("page", newPage);
    newSearchParams.set("search", newSearchTerm);
    newSearchParams.set("sort_by", newSort);
    newSearchParams.set("sort_order", newOrder);
    setProperties([]);
    if (newSearchTerm !== search || newSort !== sort || newOrder !== order) {
      setSearch(newSearchTerm);
      setSort(newSort);
      setOrder(newOrder);
      setPage(1);
      newSearchParams.set("page", 1);
      fetchProperties(
        1,
        newSearchParams.get("search"),
        newSearchParams.get("sort_by"),
        newSearchParams.get("sort_order")
      );
    } else {
      setSearch(newSearchTerm);
      setSort(newSort);
      setOrder(newOrder);
      setPage(newPage);
      fetchProperties(
        newPage,
        newSearchParams.get("search"),
        newSearchParams.get("sort_by"),
        newSearchParams.get("sort_order")
      );
    }
    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  useEffect(() => {
    fetchProperties(page, search, sort, order);
  }, [page, search, sort, order]);

  return (
    <main id="list-property-view">
      <FilterButtons
        callback={({ newSearchTerm, newSort, newOrder }) =>
          handleChange(page, newSearchTerm, newSort, newOrder)
        }
      />

      <div>
        <TableProperty properties={properties} />
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination
            pages={pages}
            range={range}
            callback={(newPage) => handleChange(newPage, search)}
          />
        </div>
        {/* End Pagination */}
      </div>
    </main>
  );
}
