import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import TestingDumpingGround from "../components/TestingDumpingGround";

const GET_DROPDOWN1_OPTIONS = gql`
  query GetDropdown1Options {
    Object {
        ObjectID
        Name
      }
    }
`;

const GET_DROPDOWN2_OPTIONS = gql`
  query GetDropdown2Options {
    Category {
        CategoryID
        Name
      }
  }
`;

const GET_DROPDOWN3_OPTIONS = gql`
  query GetDropdown3Options {
    SubCategory {
        SubCategoryID
        Name
      }
  }
`;

const GET_DROPDOWN4_OPTIONS = gql`
  query GetDropdown4Options {
    Article {
        ArticleID
        Name
    }
  }
`;

const DBControlPanel = () => {
    const [Objects, setDropdown1Options] = useState([]);
    const [Categorys, setDropdown2Options] = useState([]);
    const [SubCategorys, setDropdown3Options] = useState([]);
    const [Articles, setDropdown4Options] = useState([]);

    const { loading: loadingDropdown1, error: errorDropdown1, data: dataDropdown1 } =
        useQuery(GET_DROPDOWN1_OPTIONS);

    console.log(errorDropdown1);
    const { loading: loadingDropdown2, error: errorDropdown2, data: dataDropdown2 } =
        useQuery(GET_DROPDOWN2_OPTIONS);

    const { loading: loadingDropdown3, error: errorDropdown3, data: dataDropdown3 } =
        useQuery(GET_DROPDOWN3_OPTIONS);

    const { loading: loadingDropdown4, error: errorDropdown4, data: dataDropdown4 } =
        useQuery(GET_DROPDOWN4_OPTIONS);

    useEffect(() => {
        if (dataDropdown1) {
            setDropdown1Options(dataDropdown1.Object);
        }
    }, [dataDropdown1]);

    useEffect(() => {
        if (dataDropdown2) {
            setDropdown2Options(dataDropdown2.Category);
        }
    }, [dataDropdown2]);

    useEffect(() => {
        if (dataDropdown3) {
            setDropdown3Options(dataDropdown3.SubCategory);
        }
    }, [dataDropdown3]);

    useEffect(() => {
        if (dataDropdown4) {
            setDropdown4Options(dataDropdown4.Article);
        }
    }, [dataDropdown4]);

    return (
        <div>
        <TestingDumpingGround />
        <br />
        <br />
        <br />
        <br />
        <br />
            <select>
                {loadingDropdown1 ? (
                    <option>Loading Dropdown 1...</option>
                ) : errorDropdown1 ? (
                    <option>Error loading Dropdown 1</option>
                ) : (
                    Objects.map((Object) => (
                        <option key={Object.ObjectID} value={Object.ObjectID}>
                            {Object.Name}
                        </option>
                    ))
                )}
            </select>

            <select>
                {loadingDropdown2 ? (
                    <option>Loading Dropdown 2...</option>
                ) : errorDropdown2 ? (
                    <option>Error loading Dropdown 2</option>
                ) : (
                    Categorys.map((Category) => (
                        <option key={Category.CategoryID} value={Category.CategoryID}>
                            {Category.Name}
                        </option>
                    ))
                )}
            </select>

            <select>
                {loadingDropdown3 ? (
                    <option>Loading Dropdown 3...</option>
                ) : errorDropdown3 ? (
                    <option>Error loading Dropdown 3</option>
                ) : (
                    SubCategorys.map((SubCategory) => (
                        <option key={SubCategory.CategoryID} value={SubCategory.CategoryID}>
                            {SubCategory.Name}
                        </option>
                    ))
                )}
            </select>
            <select>
                {loadingDropdown4 ? (
                    <option>Loading Dropdown 4...</option>
                ) : errorDropdown4 ? (
                    <option>Error loading Dropdown 4</option>
                ) : (
                    Articles.map((Article) => (
                        <option key={Article.ArticleID} value={Article.ArticleID}>
                            {Article.Name}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};

export default DBControlPanel;