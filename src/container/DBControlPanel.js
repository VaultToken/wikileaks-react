import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_DROPDOWN1_OPTIONS = gql`
  query GetDropdown1Options {
    dropdown1Options {
      id
      label
    }
  }
`;

const GET_DROPDOWN2_OPTIONS = gql`
  query GetDropdown2Options {
    dropdown2Options {
      id
      label
    }
  }
`;

const GET_DROPDOWN3_OPTIONS = gql`
  query GetDropdown3Options {
    dropdown3Options {
      id
      label
    }
  }
`;

const GET_DROPDOWN4_OPTIONS = gql`
  query GetDropdown4Options {
    dropdown4Options {
      id
      label
    }
  }
`;

const DBControlPanel = () => {
    const [dropdown1Options, setDropdown1Options] = useState([]);
    const [dropdown2Options, setDropdown2Options] = useState([]);
    const [dropdown3Options, setDropdown3Options] = useState([]);
    const [dropdown4Options, setDropdown4Options] = useState([]);

    const { loading: loadingDropdown1, error: errorDropdown1, data: dataDropdown1 } =
        useQuery(GET_DROPDOWN1_OPTIONS);

    const { loading: loadingDropdown2, error: errorDropdown2, data: dataDropdown2 } =
        useQuery(GET_DROPDOWN2_OPTIONS);

    const { loading: loadingDropdown3, error: errorDropdown3, data: dataDropdown3 } =
        useQuery(GET_DROPDOWN3_OPTIONS);

    const { loading: loadingDropdown4, error: errorDropdown4, data: dataDropdown4 } =
        useQuery(GET_DROPDOWN4_OPTIONS);

    useEffect(() => {
        if (dataDropdown1) {
            setDropdown1Options(dataDropdown1.dropdown1Options);
        }
    }, [dataDropdown1]);

    useEffect(() => {
        if (dataDropdown2) {
            setDropdown2Options(dataDropdown2.dropdown2Options);
        }
    }, [dataDropdown2]);

    useEffect(() => {
        if (dataDropdown3) {
            setDropdown3Options(dataDropdown3.dropdown3Options);
        }
    }, [dataDropdown3]);

    useEffect(() => {
        if (dataDropdown4) {
            setDropdown4Options(dataDropdown4.dropdown4Options);
        }
    }, [dataDropdown4]);

    return (
        <div>
            <select>
                {loadingDropdown1 ? (
                    <option>Loading Dropdown 1...</option>
                ) : errorDropdown1 ? (
                    <option>Error loading Dropdown 1</option>
                ) : (
                    dropdown1Options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
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
                    dropdown2Options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
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
                    dropdown3Options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
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
                    dropdown4Options.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))
                )}
            </select>
        </div>
    );
};

export default DBControlPanel;