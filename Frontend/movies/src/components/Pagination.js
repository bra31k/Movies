import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import { Link } from "react-router-dom";
import '../style/FilmList.css'

export class PagesLink extends React.Component {

    onBtnClick(page) {
        const { setCurrentPage } = this.props;
        setCurrentPage(page);
    }

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
        return (
            <div className='pagination-style'>
              <Pagination aria-label="Page navigation example">
                <PaginationItem>
                  <Link to = {`/${url}/`} onClick={() => this.onBtnClick(1)}><PaginationLink previous/></Link>
                </PaginationItem>
                  { page > 1 ?
                      <Link to = { page - 1 !== 1 ? `/${url}/${(parseInt(page) - 1)}` : `/${url}/`} onClick={() => this.onBtnClick(page  > 1 ? (parseInt(page) - 1) : 1)}>
                      {this.renderPageItem((parseInt(page) - 1), false)}
                    </Link> : ""}
                  <Link to = {`/${url}/${page}`} onClick={() => this.onBtnClick(parseInt(page))} >
                      {this.renderPageItem(page, true)}
                  </Link>
                  {(parseInt(page) + 1) < lastPage ?
                      <Link to = {`/${url}/${(parseInt(page) + 1)}`} onClick={() => this.onBtnClick(parseInt(page) + 1)} >
                          {this.renderPageItem((parseInt(page) + 1), false)}
                      </Link> : ""
                  }
                  {(parseInt(page) + 2) < lastPage ?
                      <Link to={`/${url}/${(parseInt(page) + 2)}`} onClick={() => this.onBtnClick(parseInt(page) + 2)} >
                          {this.renderPageItem((parseInt(page) + 2), false)}
                      </Link> : ""
                  }
                <PaginationItem>
                    <Link to = {`/${url}/${lastPage}`} onClick={() => this.onBtnClick(lastPage)} ><PaginationLink next /></Link>
                </PaginationItem>
              </Pagination>
            </div>

            );
    }
}

export default PagesLink;

