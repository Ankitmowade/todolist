import Ui from "./ui";
let List = (props) => {
  return (
    <div>
      {props.values.map((elem) => {
        return (
          <Ui
            tandf={elem.tandf}
            data={elem.data}
            date={elem.date}
            key={Math.random().toString()}
            id={Math.random().toString()}
          />
        );
      })}
    </div>
  );
};
export default List;
