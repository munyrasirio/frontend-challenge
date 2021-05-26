import styled from 'styled-components';
import { Pagination } from 'react-bootstrap';

const PaginationPropsExtractor = ({ ...props }) => <Pagination {...props} />
export const StyledPagination = styled(PaginationPropsExtractor)`
  /* background-color: ${props => props.bgColor || "#FFF"};
  border: 1px solid #B0B0B0;
  transition: .2s;
  span {
    transition: .2s;
  }

  &:focus-within {
    border-color: ${props => props.bdColor || "#ff7d00"};
    box-shadow: ${props => props.bdColor ? `0 0 0 0.2rem rgb(${props.bdColor}/ 25%)` : "0 0 0 0.2rem rgb(255 125 0 / 25%)"};
    span {
      color: ${props => props.bdColor || "#ff7d00"};
    }
  } */
`;

const PaginationItemPropsExtractor = ({ color, colorHover, size, weight, ...props }) => <Pagination.Item {...props} />
export const StyledPaginationItem = styled(PaginationItemPropsExtractor).attrs({
  className: "mx-2"
})`
  & a {
    color: #9B9B9B;
  }

  &.active .page-link { 
    background-color: transparent;
    color: #9B9B9B;
    font-weight: 600;
    position: relative;
  }

  &.active .page-link:after{
    content: "";
    position: absolute;
    height: 4px;
    width: 100%;
    background-color: #9B9B9B;
    bottom: -5px;
    left: 0;
    border-radius: 10px;
  }

  & .page-link {
    border: none;
    width: 35px;
    height: 35px;
    transition: .3s;
    border-radius: 25px;
  }
  & .page-link:hover {
    background-color: #4A4A4A;
    color: #FFF;
  }
  & .page-link:focus {
    box-shadow: 0 0 0 0.2rem rgb(74 74 74 / 25%);
  } 
  & span { 
    border-radius: 25px;
  }  

  &:first-child .page-link,
  &:last-child .page-link {
    background-color: #E5E5E5;
    color: #FFF;
    border-radius: 25px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;
  }
  &:first-child .page-link:hover,
  &:last-child .page-link:hover {
    background-color: #4A4A4A;
  }
`;