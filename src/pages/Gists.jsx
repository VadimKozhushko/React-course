import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { selectGists, selectGistsError, selectGistsLoading } from '../store/gists/selectors';
import { getAllGists } from '../store/gists/actions';

export const GistsList = () => {

  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const dispatch = useDispatch();

  const requestGists = () => {
    dispatch(getAllGists());
  };

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }

  return (
    <>
      <h1>GistsList</h1>
      <Button
        variant="contained"
        color="success"
        onClick={requestGists}
      >
        Get API
      </Button>
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      {!loading && gists.map((gist) => (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <li key={gist.id}>{gist.description}</li>
        </Box>
      ))}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </>
  )
}