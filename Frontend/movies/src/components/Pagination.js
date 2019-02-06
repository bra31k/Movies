import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import Film from "./Film";

export class PagesLink extends React.Component {

    renderPaginationItem(page) {
        return (
            <PaginationItem>
                <PaginationLink href={page}>
                    {page}
                </PaginationLink>
            </PaginationItem>
        )
    }

    render() {
        const page = this.props.page;
        return (
              <Pagination size="lg" aria-label="Page navigation example">
                <PaginationItem>
                  <PaginationLink previous href={'/'} />
                </PaginationItem>
                  {parseInt((page) - 1) > 0 ? this.renderPaginationItem(parseInt(page) - 1) : false}
                  {this.renderPaginationItem(page)}
                  {this.renderPaginationItem(parseInt(page) + 1)}
                <PaginationItem>
                  <PaginationLink next href={parseInt(page) + 1} />
                </PaginationItem>
              </Pagination>
            );
    }
}

export default PagesLink;

