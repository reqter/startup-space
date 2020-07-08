import { useState, useEffect } from "react";
import {
  BlogDetailContainer,
  Image,
  Date,
  Title,
  Tags,
  TagItem,
  Html,
  CategoriesContainer,
  CategoriesText,
  CategoriesList,
  CategoriesListItem,
} from "./styles";
import Comments from "../Comments";
import CommentForm from "../CommentForm";
import useGlobalState from "hooks/useGlobal/useGlobalState";
import useGlobalApi from "hooks/useGlobalApi";

const BlogDetail = () => {
  return (
    <BlogDetailContainer>
      <Image src="https://daughtersofafrica.org/wp-content/uploads/2020/03/co-working1-1170x658.jpg" />
      <Date>March 15, 2018</Date>
      <Title>There’s a Cool New Way for Men to Wear Socks and Sandals</Title>
      <Tags>
        {["Food", "Travel"].map((item) => (
          <TagItem>{item}</TagItem>
        ))}
      </Tags>
      <Html>
        Quibusdam autem, quas molestias recusandae aperiam molestiae modi qui
        ipsam vel. Placeat tenetur veritatis tempore quos impedit dicta, error
        autem, quae sint inventore ipsa quidem. Quo voluptate quisquam
        reiciendis, minus, animi minima eum officia doloremque repellat eos,
        odio doloribus cum.
        <br /> Temporibus quo dolore veritatis doloribus delectus dolores
        perspiciatis recusandae ducimus, nisi quod, incidunt ut quaerat, magnam
        cupiditate. Aut, laboriosam magnam, nobis dolore fugiat impedit
        necessitatibus nisi cupiditate, quas repellat itaque molestias sit
        libero voluptas eveniet omnis illo ullam dolorem minima.
        <br /> Porro amet accusantium libero fugit totam, deserunt ipsa,
        dolorem, vero expedita illo similique saepe nisi deleniti. Cumque,
        laboriosam, porro! Facilis voluptatem sequi nulla quidem, provident eius
        quos pariatur maxime sapiente illo nostrum quibusdam aliquid fugiat!
        Earum quod fuga id officia.
        <br /> Illo magnam at dolore ad enim fugiat ut maxime facilis autem,
        nulla cumque quis commodi eos nisi unde soluta, ipsa eius aspernatur
        sint atque! Nihil, eveniet illo ea, mollitia fuga accusamus dolor
        dolorem perspiciatis rerum hic, consectetur error rem aspernatur! <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        magni explicabo id molestiae, minima quas assumenda consectetur, nobis
        neque rem, incidunt quam tempore perferendis provident obcaecati
        sapiente, animi vel expedita omnis quae ipsa! Obcaecati eligendi sed
        odio labore vero reiciendis facere accusamus molestias eaque impedit,
        consequuntur quae fuga vitae fugit?
      </Html>

      <CategoriesContainer>
        <CategoriesText>Categories: </CategoriesText>
        <CategoriesList>
          {["Food", "Travel"].map((item) => (
            <CategoriesListItem>{item}, </CategoriesListItem>
          ))}
        </CategoriesList>
        <CategoriesText>Tags: </CategoriesText>
        <CategoriesList>
          {["Food", "Travel"].map((item) => (
            <CategoriesListItem>#{item}, </CategoriesListItem>
          ))}
        </CategoriesList>
      </CategoriesContainer>
      <Comments />
      <CommentForm />
    </BlogDetailContainer>
  );
};
export default BlogDetail;
