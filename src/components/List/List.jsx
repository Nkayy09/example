import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {/* <ListItem item={{ name: "blaze", price: 1000 }} /> */}

          {/* <ListItem />
          <ListItem /> */}
          {items.map((content, index) => (
            <ListItem key={index} item={content} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
