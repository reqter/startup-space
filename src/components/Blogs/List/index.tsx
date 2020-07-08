import { ListContainer, Button } from "./styles";
import BlogItem from "components/Common/BlogItem";
import Loading from "components/Common/CardSkeleton";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogsList = ({ loading, data = [] }) => {
  const { blogsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <ListContainer>
      {loading ? (
        <>
          <Loading colSpan={2} />
          <Loading colSpan={2} />
          <Loading colSpan={2} />
        </>
      ) : (
        <>
          {data
            ? data.map((item, index) => (
                <BlogItem
                  key={index}
                  data={item}
                  actionName={getValue(blogsPageData, "blogitemactiontext")}
                  colSpan={2}
                />
              ))
            : null}
          <Button>Load More...</Button>
        </>
      )}
    </ListContainer>
  );
};
export default BlogsList;
