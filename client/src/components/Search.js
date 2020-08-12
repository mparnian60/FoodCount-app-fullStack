import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import searchAPI from '../api/searchAPI';
import SearchResult from './SearchResult';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 800,
        margin:'auto',
        marginTop: 50,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Search = () => {
    const classes = useStyles();

    const [searchItem, setSearchItem] = useState("");
    const [searchResult, setSearchResults] = useState([]);


    const handleSearchEntry = (e) => {
        setSearchItem(e.currentTarget.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchItem) {
            searchAPI(searchItem)
                .then((result) => {
                    // console.log('result',result);
                    setSearchResults(result);
                });
        }
    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSearchSubmit}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Food"
                        onChange={handleSearchEntry}
                        value={searchItem}
                    // inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <SearchResult foodResult={searchResult} />
            </Form>
        </React.Fragment>

    )
}

export default Search;
