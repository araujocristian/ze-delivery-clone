import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import { GET_CATEGORY_LIST, GET_PRODUCT_LIST } from "../../services/queries";
import {
  Container,
  Categories,
  Category,
  CategoryContent,
  CategoryText,
  ProductsContainer,
  Image,
  ProductCard,
  ProductTitle,
  ProductPrice,
  Content,
  AddButton
} from "./styles";
import Footer from "../../components/Footer";
import {
  FaPlus,
  FaCocktail,
  FaWineGlassAlt,
  FaPizzaSlice
} from "react-icons/fa";
import { GiGlassShot, GiMeltingIceCube } from "react-icons/gi";
import { IoIosBeer } from "react-icons/io";

const Products = withRouter(
  ({
    match: {
      params: { pocId }
    }
  }) => {
    const categoriesData = useQuery(GET_CATEGORY_LIST);

    const productsData = useQuery(GET_PRODUCT_LIST, {
      variables: {
        id: pocId,
        search: "",
        categoryId: null
      }
    });

    const selectIcon = id => {
      console.log("id", id);

      switch (id) {
        case "94":
          return <IoIosBeer />;
        case "95":
          return <FaCocktail />;
        case "92":
          return <FaWineGlassAlt />;
        case "96":
          return <GiGlassShot />;
        case "97":
          return <FaPizzaSlice />;
        default:
          return <GiMeltingIceCube />;
      }
    };

    if (categoriesData.loading || productsData.loading)
      return (
        <Container>
          <Content>
            <Categories>
              <Category>
                <p>Carregando os melhores produtos...</p>
              </Category>
            </Categories>
          </Content>
          <Footer />
        </Container>
      );
    if (categoriesData.error || productsData.error)
      return (
        <Container>
          <Content>
            <Categories>
              <Category>
                <p>Error :(</p>
              </Category>
            </Categories>
          </Content>
          <Footer />
        </Container>
      );

    return (
      <Container>
        <Categories>
          {categoriesData.data.allCategory.map(category => (
            <Category key={category.id}>
              <CategoryContent>
                {console.log(category.id)}
                {selectIcon(category.id)}
                <CategoryText>{category.title}</CategoryText>
              </CategoryContent>
            </Category>
          ))}
        </Categories>
        <ProductsContainer>
          {productsData.data.poc.products.map(product => (
            <ProductCard key={product.id}>
              <Image>
                <img src={product.images[0].url} alt="" />
              </Image>
              <hr />
              <ProductTitle>
                <p>{product.title}</p>
              </ProductTitle>
              <ProductPrice>
                <p>R$ {product.productVariants[0].price}</p>
              </ProductPrice>
              <AddButton>
                <FaPlus />
              </AddButton>
            </ProductCard>
          ))}
        </ProductsContainer>
        <Footer />
      </Container>
    );
  }
);

export default Products;
