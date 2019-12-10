import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import { 
  Container, 
  Content, 
  Card, 
  CardContent,
  CardHeader, 
  CardFooter,
  Title,
  Description,
  Annotation,
 } from './styles';
 import Menu from '../../components/Menu';

export default function Home() {
  return(
    <Container>
      <Header/>

      <Content>
        <Menu/>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 6.387,23</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência de R$ 450,00 recebida por Victor
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      
      <Tabs/>
    </Container>
  );
}