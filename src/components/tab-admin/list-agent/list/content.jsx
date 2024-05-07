import dynamic from "next/dynamic"

const Element = dynamic(() => import('./element'))

const HeaderQuantity = (integration) =>{
    
    switch(integration){
        case 'agente':
            return(
                <div className="container-localities">
                    <div>Cantidad de propiedades</div>
                    <div>Cantidad de emprendimientos</div>
                    <div>Cantidad de barrios</div>
                </div>
            )
        case 'usuario':
            return(
                <div className="container-localities">
                    <div>Cantidad de Favoritos</div>
                    <div>Cantidad de Búsquedas</div>
                    <div>Cantidad de Interacciones</div>
                </div>
            )
    }
}

export default function TableListAgent_User({integration}){
    return(
        <div className="row" id='listing-agents'>
            {/* Begin headers table */}
            <ul className="col-12 content-container container-generic">
                <li>Nombre</li>
                <li>Email</li>
                <li>Ultima acción</li>
                <li className="container-generic">
                    {HeaderQuantity(integration)}
                </li>
                <li>Acción</li>
            </ul>
            {/* End headers table */}
    
            {/* Begin Content Table */}
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Editar información de {nombre de propiedad}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Creó la propiedad {nombre}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Editó el barrio {nombre}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Editó la propiedad {nombre}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Creó el emprendimiento {nombre}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            <Element
                nombre={`Nombre del ${integration}`}
                email={"email@email.com"}
                action={"Editar información de {nombre de propiedad}"}
                acc={{
                    "property":"5",
                    "enterpreneur":"1",
                    "neighborhood":"2"
                }}
            />
            {/* End Content Table */}
        </div>
    )
}