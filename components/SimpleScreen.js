import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Title,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
export default class SimpleScreen extends Component {
  onPressFooterTab = screen => {
    console.log(screen);
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>{this.props.tabActive}</Title>
          </Body>
          <Right />
        </Header>
        <Content>{this.props.children}</Content>
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={this.props.tabActive === "Kodi" ? true : false}
              onPress={() => this.onPressFooterTab("kodi")}
            >
              <Icon
                name="apps"
                active={this.props.tabActive === "Kodi" ? true : false}
              />
              <Text>Kodi</Text>
            </Button>
            <Button
              vertical
              active={this.props.tabActive === "Nas" ? true : false}
              onPress={() => this.onPressFooterTab("nas")}
            >
              <Icon
                name="camera"
                active={this.props.tabActive === "Nas" ? true : false}
              />
              <Text>Nas</Text>
            </Button>
            <Button vertical onPress={() => this.onPressFooterTab("navigate")}>
              <Icon name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical onPress={() => this.onPressFooterTab("contact")}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
