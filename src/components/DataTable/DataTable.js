import React from "react";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import { Col, Row, Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// Create table headers consisting of 4 columns.
const header = [
  { title: "Username", prop: "username" },
  { title: "Name", prop: "realname" },
  { title: "Location", prop: "location" },
];

// Randomize data of the table columns.
// Note that the fields are all using the `prop` field of the headers.
const body = Array.from(new Array(57), () => {
  const rd = (Math.random() * 10).toFixed(1);

  if (rd > 0.5) {
    return {
      username: "i-am-billy",
      realname: `Billy ${rd}`,
      location: "Mars",
    };
  }

  return {
    username: "john-nhoj",
    realname: `John ${rd}`,
    location: "Saturn",
  };
});

// Then, use it in a component.
function TableComponent() {
  return (
    <DatatableWrapper body={body} headers={header}>
      <Row className="mb-4">
        <Col
          xs={12}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Filter />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
        >
          <PaginationOptions />
        </Col>
        <Col
          xs={12}
          sm={6}
          lg={4}
          className="d-flex flex-col justify-content-end align-items-end"
        >
          <Pagination />
        </Col>
      </Row>
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </DatatableWrapper>
  );
}

export default TableComponent;
