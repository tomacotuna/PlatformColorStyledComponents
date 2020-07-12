/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {PlatformColor, SafeAreaView, StatusBar, Text} from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  height: 100px;
  width: 100px;
  background-color: ${PlatformColor('systemPink')};
`;

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Container>
          <Text>Test</Text>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default App;
