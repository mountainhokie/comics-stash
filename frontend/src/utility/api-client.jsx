import { API_SERVER_URL } from "../public-config";
import axios from "axios";

// Gets All Issues from MongoDb
export const fetchIssues = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/issues`);
  return resp.data.issues;
};

// Gets All Collections from MongoDb
export const getCollections = async () => {
  const resp = await axios.get(`${API_SERVER_URL}/collections`);
  return resp.data.collections;
};

// Gets All Issues from a Paritcular Collection by Collection Name from MongoDb
export const fetchIssuesFromCollection = async (collectionName) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/collection-issues/${collectionName}`
  );
  return resp.data.issues;
};

// Calls Comic Vine API searching for a Volume by a String
export const searchForVolume = async (searchQuery, searchType) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/search-results/${searchQuery.search}`,
    {
      params: { searchQuery: searchQuery.search, searchType: searchType },
    }
  );
  return resp.data;
};

// Calls Comic Vine API searching for an Issue by a Cover Date and Issue Number
export const searchForIssueDate = async (searchQuery, searchType) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/search-results/${searchType}`,
    {
      params: { searchQuery: searchQuery, searchType: searchType },
    }
  );
  return resp.data;
};

// Calls Comic Vine API searching for an Issue by a Cover Date and Issue Number
export const searchForIssueNameNum = async (searchQuery, searchType) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/search-results/${searchType}`,
    {
      params: { searchQuery: searchQuery, searchType: searchType },
    }
  );
  return resp.data;
};

// Calls Comic Vine API searching for an Issue by a Series and Issue Number
export const searchForSeriesNameIssueNum = async (searchQuery, searchType) => {
  const resp = await axios.get(
    `${API_SERVER_URL}/search-results/${searchType}`,
    {
      params: { searchQuery: searchQuery.search, searchType: searchType },
    }
  );
  return resp.data;
};

// Gets a Specific Volume by ID from Comic Vine API
export const getIssuesForVolume = async (searchQuery, pageNum = 1) => {
  //pageNum = 2;
  const resp = await axios.get(
    `${API_SERVER_URL}/volume/${searchQuery}?page=${pageNum}`
  );
  return resp.data;
};

// Gets a Specific Issue by ID from MongoDB or Comic Vine API
export const getIssue = async (issueID) => {
  const resp = await axios.get(`${API_SERVER_URL}/issue/${issueID}`);
  return resp.data;
};

// Adds an Issue from Comic Vine API to the MongoDB
export const addIssue = async (issue) => {
  await axios
    .post(`${API_SERVER_URL}/add-issue`, {
      issue: issue,
    })
    .then(function (response) {
      if (response.status === 200) {
        return response.status;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};

// Adds an Issue from Comic Vine API to the MongoDB
// This one comes from the main search page.  We must get the full issue details before adding.
export const addIssueQuick = async (issueID) => {
  const addedIssue = await axios
    .get(`${API_SERVER_URL}/issue/${issueID}`)
    .then(async function (res) {
      if (res.data.d?.results) {
        const issue = res.data.d.results;
        const added = await axios
          .post(`${API_SERVER_URL}/add-issue`, {
            issue: issue,
          })
          .then(function (response) {
            if (response.status === 200) {
              return response.status;
            }
          })
          .catch(function (error) {
            console.error(error);
          });
        return added;
      }
    });
  return addedIssue;
};

// Gets a Specific Issue by ID from MongoDB or Comic Vine API
export const deleteIssue = async (issueID) => {
  const resp = await axios.delete(`${API_SERVER_URL}/remove-issue/${issueID}`);
  return resp;
};

// Updated a Specific Issue's field
export const updateIssue = async (issueID, issueField, issueValue) => {
  await axios
    .patch(`${API_SERVER_URL}/update-issue`, {
      issueID: issueID,
      issueField: issueField,
      issueValue: issueValue,
    })
    .then(function (response) {
      if (response.status === 200) {
        return response.status;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
  return "Yes";
};
