import {
  ListContainer,
  LoadingsContainer,
  ListItems,
  PagingContainer,
  Button,
} from "./styles";
import EmptyList from "components/Common/EmptyList";
import BlogItem from "components/Common/BlogItem";
import Loading from "components/Common/CardSkeleton";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useObjectPropsValue from "hooks/useObjectPropsValue";

const BlogsList = ({
  loading,
  data = [],
  skip,
  limit,
  onNextPageClicked,
  onPrevClicked,
}) => {
  const { blogsPageData } = useGlobalState();
  const { getValue } = useObjectPropsValue();
  return (
    <ListContainer>
      {loading ? (
        <LoadingsContainer>
          <Loading colSpan={2} />
          <Loading colSpan={2} />
          <Loading colSpan={2} />
        </LoadingsContainer>
      ) : !data || !data.length ? (
        <EmptyList
          image={blogsPageData.emptylistimage}
          text={blogsPageData.emptylisttext}
        />
      ) : (
        <>
          <ListItems>
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
          </ListItems>
          {skip === 0 && data.length < limit ? null : (
            <PagingContainer>
              {skip !== 0 && (
                <Button onClick={onPrevClicked}>
                  {getValue(blogsPageData, "previousactiontitle")}
                </Button>
              )}
              <Button width={50}>{skip + 1}</Button>
              <Button onClick={onNextPageClicked}>
                {getValue(blogsPageData, "nextactiontitle")}
              </Button>
            </PagingContainer>
          )}
        </>
      )}
    </ListContainer>
  );
};
export default BlogsList;
