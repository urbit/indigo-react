import * as React from "react";

import {
  Row,
  Text,
  Rule
} from "@tlon/indigo-react";

// const sequence = num => Array.from(Array(num), (_, i) => i);


export default class CatalogPage extends React.Component {
  render() {
    // let { componentId } = useParams();
    console.log(this.props)
    return (
      <Row flexWrap='wrap' minHeight='100vh'>
        <Rule />
        <Text>Component Page</Text>
      </Row>
    )
  }
}
