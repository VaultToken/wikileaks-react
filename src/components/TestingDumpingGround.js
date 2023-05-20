import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import {gql, useQuery} from "@apollo/client";

const objectQuery = gql`
  query GetDropdown1Options {
    Object {
        ObjectID
        Name
      }
    }
`;

const categoryQuery = gql`
  query GetDropdown2Options {
    Category {
        CategoryID
        CategoryName
      }
  }
`;

const subCategoryQuery = gql`
  query GetDropdown3Options {
    SubCategory {
        SubCategoryID
        Name
      }
  }
`;

const articleQuery = gql`
  query GetDropdown4Options {
    Article {
        ArticleID
        Name
    }
  }
`;


const Example = () => {
    const [selectedObject, setSelectedObject] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState([]);
    const [objectData, setObjectData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [subCategoryData, setSubCategoryData] = useState([]);
    const [articleData, setArticleData] = useState([]);

    const {
        data: objectDataRetrieved,
    } = useQuery(objectQuery);

    const {
        data: categoryDataRetrieved,
    } = useQuery(categoryQuery);

    const {
        data: subCategoryDataRetrieved,
    } = useQuery(subCategoryQuery);

    const {
        data: articleDataRetrieved,
    } = useQuery(articleQuery);


    useEffect(() => {
        if (objectDataRetrieved) {
            setObjectData(objectDataRetrieved.Object);
        }
        if (categoryDataRetrieved) {
            setCategoryData(categoryDataRetrieved.Category);
        }
        if (subCategoryDataRetrieved) {
            setSubCategoryData(subCategoryDataRetrieved.SubCategory);
        }
        if (articleDataRetrieved) {
            setArticleData(articleDataRetrieved.Article);
        }
    }, [objectDataRetrieved, categoryDataRetrieved, subCategoryDataRetrieved, articleDataRetrieved]);
    
    
    const typesOfRender = {
        select: 0,
        insert: 1,
        edit: 2,
        delete: 3
    }
    
    const currentRenderType = typesOfRender.select;
    
    function doCustomChange(clickedValue) {
        setSelectedObject(clickedValue);
        if (clickedValue.length > 1) {
            setSelectedObject([clickedValue[clickedValue.length - 1]]);
        }
    }


    
    const valueRenderer = (selected: typeof options) => {
        if (!selected.length) {
            return "No Item Selected";
        }

        return selected.length === 1
            ? `${selected[0].label} `
            : selected.map(({ label }) => "✔️ " + label);
    };

    const renderInsert = () => {
        if (selectedObject.length >= 1)
        return (
            <div>
                <h1>Select Category</h1>

                <MultiSelect
                    options={categoryData.map((item) => ({
                        value: item.CategoryID,
                        label: item.CategoryName
                    }))}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    labelledBy="Select"
                    valueRenderer={valueRenderer}
                    hasSelectAll={false}
                    closeOnChangedValue={true}
                />
            </div>
        )
    }
    
    const renderSubCategory = () => {
        if (selectedCategory.length >= 1)
        return (
            <div>
                <h1>Select SubCategory</h1>

                <MultiSelect
                    options={subCategoryData.map((item) => ({
                        value: item.SubCategoryID,
                        label: item.Name
                    }))}
                    value={selectedSubCategory}
                    onChange={setSelectedSubCategory}
                    labelledBy="Select"
                    valueRenderer={valueRenderer}
                    hasSelectAll={false}
                    closeOnChangedValue={true}
                />
            </div>
        )
    }

    const renderArticle = () => {
        if (selectedSubCategory.length >= 1)
            return (
                <div>
                    <h1>Select Article</h1>

                    <MultiSelect
                        options={articleData.map((item) => ({
                            value: item.ArticleID,
                            label: item.Name
                        }))}
                        value={selectedArticle}
                        onChange={setSelectedArticle}
                        labelledBy="Select"
                        valueRenderer={valueRenderer}
                        hasSelectAll={false}
                        closeOnChangedValue={true}
                    />
                </div>
            )
    }
    
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <h1>Select Object</h1>
            
            <MultiSelect
                options={objectData.map((item) => ({
                    value: item.ObjectID,
                    label: item.Name
                }))}
                value={selectedObject}
                onChange={doCustomChange}
                labelledBy="Select"
                valueRenderer={valueRenderer}
                hasSelectAll={false}
                closeOnChangedValue={true}
            />
            {renderInsert()}
            {renderSubCategory()}
            {renderArticle()}
        </div>
    );
};

export default Example;