const SectionInfo = ({title, text1, text2}) => {
  return (
    <section className="row justify-content-center my-5">
      <div className="col-4">
        <h3 className="mb-3">{title}</h3>
        <div className="w-75" dangerouslySetInnerHTML={{ __html: text1 }}/>
      </div>
      <div className="col-4 text-side2" dangerouslySetInnerHTML={{ __html: text2 }}/>
    </section>
  );
}

export default SectionInfo;