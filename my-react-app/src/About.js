// A page that describes who you are (or the person you creating a website for)
import React, { useEffect, useState } from 'react';
import './About.css';

function About() {
  // State variables to store API data, loading state, and error
  const [contents, setContents] = useState("");
  const [wikiUrl,setWikiUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // Fetch wiki url of hokusai data from Wikipedia API when the component mounts
  useEffect(() => {
    const url_wiki = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=Hokusai&limit=1&namespace=0&format=json";

    fetch(url_wiki)
      .then(function(response){return response.json();})
      .then(function(response){setWikiUrl(response);})
      .catch(function(error){console.log(error);})
    },[]);
  
  // Fetch content about hokusai from Wikipedia API
  useEffect(() => {

    const url =
      "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=Hokusai";

      // Function to extract content from API response
      const extractAPIContents = json => {
      const { pages } = json.query;
      const pageId = Object.keys(pages)[0];
      return pages[pageId].extract;
    };

    // Function to fetch content from API
    const getContents = async () => {
      setLoading(true);
      try {
        const resp = await fetch(url);
        const json = await resp.json();
        const extractedContent = extractAPIContents(json);
        setContents(extractedContent);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getContents();
  }, []);

  // Display loading message while fetching data
  if (loading) return "Loading ...";
  // Display error message if an error occurs during data fetching
  if (error) return "An error occurred";

  // Filter and format the content to display only the first paragraph
  const filteredContent = contents.split('<p>').slice(1, 2).join('<p>');

  return (
    <div className="about">
      <h1>About</h1>
      <div className="border"></div>

      <div className="wiki-content" dangerouslySetInnerHTML={{ __html: filteredContent }} />

    {wikiUrl && (
        <div className="wiki-url">
            <a href={wikiUrl[3]}>More info here</a>
        </div>
      )}
    </div>
  );
}

export default About;
