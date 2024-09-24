import List from "./component/List";
import PackingList from "./component/PackingList";
import Profile from "./component/Profile";
import TodoList from "./component/TodoList";

export default function Gallery() {
  return (
    <>
      <section>
        <h1>Amazing scientists</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
      <section>
        <h1>TodoList</h1>
        <TodoList />
      </section>
      <section>
        <h1>PackingList</h1>
        <PackingList />
      </section>
      <section>
        <h1>List</h1>
        <List />
      </section>
    </>
  );
}
