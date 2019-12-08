import React, { Fragment, Component } from "react";

import styled from "styled-components";
import {
  Tabs,
  Tab,
  TabBody,
  Window,
  WindowHeader,
  WindowContent,
  Fieldset,
  NumberField,
  Checkbox
} from "react95";

export default class AboutTabs extends React.Component {
  state = {
    activeTab: 0
  };
  handleChange = value => this.setState({ activeTab: value });
  render() {
    const { activeTab } = this.state;
    return (
      <React.Fragment>
        <Tabs value={activeTab} onChange={this.handleChange}>
          <Tab value={0}>Shoes</Tab>
          <Tab value={1}>Accesories</Tab>
          <Tab value={2}>Clothing</Tab>
        </Tabs>

        <div className="row container">
          {activeTab === 0 && (
            <TabBody>
              <Fieldset label="Order:">
                <div style={{ padding: "0.5em 0 0.5em 0" }}>Amount:</div>
                <NumberField
                  width={"100%"}
                  min={0}
                  value={0}
                  onChange={() => null}
                />
                <Checkbox
                  style={{ marginTop: "1rem" }}
                  name="shipping"
                  value="fast"
                  label="Fast shipping"
                  onChange={() => null}
                  defaultChecked={true}
                />
              </Fieldset>
            </TabBody>
          )}
          {activeTab === 1 && <TabBody>Accesories stuff here</TabBody>}
          {activeTab === 2 && <TabBody>Clothing stuff here</TabBody>}
        </div>
      </React.Fragment>
    );
  }
}

//   <Window style={{ width: 350 }}>
//     <WindowHeader>👗 store.exe</WindowHeader>
//     <WindowContent>

//     </WindowContent>
//   </Window>
