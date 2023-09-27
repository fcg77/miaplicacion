

export default function Usuario(props) {


    return (
        <div>
            <div className="card m-auto mt-2" style={{ width: "18rem" }}>
                <img src={props.imagen} className="img-fluid rounded-start"/>
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text">{props.cargo}</p>
                    <a href="#" className="btn btn-warning">{props.conoceme}</a>
                </div>
            </div>
        </div>
    )
}

