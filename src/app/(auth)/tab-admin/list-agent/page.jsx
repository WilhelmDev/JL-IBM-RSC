import dynamic from "next/dynamic";
const ListAgent = dynamic(() => import('@/components/tab-admin/list-agent/list-agent'), { ssr: false });

const ListAgentPage = () => (
    <div id="tab-admin">
        <div id="content">
            <ListAgent 
                title_header={'Agente {Numero total de agentes}'}
                content_header={'Aqui puedes ver todos los agentes que dispone la plataforma, puedes editar la información borrarlos y ademas crear nuevos.'}
                button_label={'CREAR AGENTE'}
                integration={'agente'} 
            />
        </div>
    </div>
)

export default ListAgentPage;