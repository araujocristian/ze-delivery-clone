import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

import { GET_POC_LIST } from "../../services/queries";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import {
  Container,
  Content,
  Title,
  Subtitle,
  Icon,
  Input,
  ErrorText
} from "./styles";
import { FaMapMarkerAlt } from "react-icons/fa";

const dateNow = new Date();

const Main = withRouter(({ history }) => {
  const [latLng, setLatLng] = useState({ lat: null, lng: null });

  const { data, error, loading } = useQuery(GET_POC_LIST, {
    variables: {
      algorithm: "NEAREST",
      lat: latLng.lat,
      long: latLng.lng,
      now: dateNow
    }
  });

  useEffect(() => {
    if (data && data.pocSearch[0])
      history.push(`/products/${data.pocSearch[0].id}`);
  }, [data]);

  return (
    <Container>
      <Content>
        <Title>Seu delivery de bebidas geladas a preço baixo</Title>
        <Subtitle>Para curtir a qualquer momento</Subtitle>
        <Input>
          <Icon error={data && !data.pocSearch[0]}>
            <FaMapMarkerAlt />
          </Icon>
          <Search latLng={latLng} setLatLng={setLatLng} history={history} />
        </Input>
        {data && !data.pocSearch[0] ? (
          <>
            {console.log(data, error, loading, data.pocSearch.lenght)}
            <ErrorText>Ops! Não foi possível encontrar o endereço.</ErrorText>
          </>
        ) : null}
      </Content>
      <Footer />
    </Container>
  );
});

export default Main;
