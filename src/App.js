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
    </>
  );
}
