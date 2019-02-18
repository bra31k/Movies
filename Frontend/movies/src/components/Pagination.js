import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import { Link } from "react-router-dom";

export class PagesLink extends React.Component {

    renderPageItem (page, active) {
        if (active){
            return (
                <PaginationItem active>
                    <PaginationLink>
                        {page}
                    </PaginationLink>
                </PaginationItem>
            )
        } else {
            return (
            <PaginationItem >
                <PaginationLink>
                    {page}
                </PaginationLink>
            </PaginationItem>
            )
        }

    }

    render() {
        const {page, url, lastPage} = this.props;
        // console.log(page.toString(), url);
        return (
            <div>
              <Pagination aria-label="Page navigation example">
                <PaginationItem>
                  <Link to = {`/${url}/`}><PaginationLink previous/></Link>
                </PaginationItem>
                  { page > 1 ?
                      <Link to = { page - 1 !== 1 ? `/${url}/${(parseInt(page) - 1)}` : `/${url}/`} >
                      {this.renderPageItem((parseInt(page) - 1), false)}
                    </Link> : ""}
                  <Link to = {`/${url}/${page}`} >
                      {this.renderPageItem(page, true)}
                  </Link>
                  {(parseInt(page) + 1) < lastPage ?
                      <Link to = {`/${url}/${(parseInt(page) + 1)}`} >
                          {this.renderPageItem((parseInt(page) + 1), false)}
                      </Link> : ""
                  }
                  {(parseInt(page) + 2) < lastPage ?
                      <Link to={`/${url}/${(parseInt(page) + 2)}`}>
                          {this.renderPageItem((parseInt(page) + 2), false)}
                      </Link> : ""
                  }
                <PaginationItem>
                    <Link to = {`/${url}/${lastPage}`} ><PaginationLink next /></Link>
                </PaginationItem>
              </Pagination>
            </div>

            );
    }
}

export default PagesLink;

