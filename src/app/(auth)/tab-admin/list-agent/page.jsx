import dynamic from "next/dynamic";
const ListAgent = dynamic(() => import('@/components/tab-admin/list-agent/list-agent'), { ssr: false });

import './list-agent.scss'

const ListAgentPage = () => (
    <div id="tab-admin">
        <div id="content">
            <ListAgent />
        </div>
    </div>
)

export default ListAgentPage;