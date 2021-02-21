import Card from "./Card";

const CardList = ({ user }) => {
  return (
    <div className="container-fluidtext-center">
      <div className="row text-center mt-5">
        {user.map((u) => {
            const {id,name, email, phone} = u;
          return (
            <div
              key={id}
              className=" col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
            >
              <Card id={id} name={name} email={email} phone={phone} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
