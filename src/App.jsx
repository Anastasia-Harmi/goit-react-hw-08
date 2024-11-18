import Routing from "./routing/Routing";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser, register } from "./redux/auth/operations";
import { selectUserDataIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectUserDataIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }

  return (
    <>
      <Layout>
        <Routing />
      </Layout>
    </>
  );
}

export default App;
