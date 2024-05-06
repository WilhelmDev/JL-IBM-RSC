import dynamic from "next/dynamic";
const ListUsers = dynamic(() => import('@/components/tab-admin/list-agent/list-agent'), { ssr: false });

const ListAgentPage = () => (
    <div id="tab-admin">
        <div id="content">
            <ListUsers 
                title_header={'Usuarios {Nombre total de Usuarios}'}
                content_header={'Aqui puedes ver todos los usuarios que dispone la plataforma, puedes editar la información borrarlos y ademas crear nuevos.'}
                button_label={'CREAR USUARIO'}
                integration={'usuario'} 
            />
        </div>
    </div>
)

export default ListAgentPage;