
const Card = ({id,name,email, phone}) => {
    return(
        <>

                <div
                  className="mx-auto card bg-info shadow p-3 mb-5 bg-body rounded"
                  style={{ width: "15rem" }}
                >
                  <img
                    src={`https://robohash.org/${id}`}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body ">
                    <p className="card-text">
                    { name } 
                   {  email } 
                   {  phone  } 
                    </p>
                  </div>
                </div>
        </>
    );
}

export default Card;