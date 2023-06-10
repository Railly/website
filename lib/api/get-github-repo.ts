const GITHUB_API_URL = "https://api.github.com";
const { GITHUB_API_TOKEN: githubApiToken = "" } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

const oneMillion = 1000000;
const oneThousand = 1000;

export const getGithubRepoStars = async ({
  owner,
  repo,
}: {
  owner: string;
  repo: string;
}) => {
  try {
    const starsResponse = await fetch(
      `${GITHUB_API_URL}/repos/${owner}/${repo}`,
      authHeaders
    );
    const starsData = await starsResponse.json();
    const stars = starsData.stargazers_count;
    let starsAsText = "";
    if (stars > 0) {
      if (stars >= oneMillion) {
        starsAsText = `${Math.floor(stars / oneMillion)}M+`;
      } else if (stars >= oneThousand) {
        starsAsText = `${Math.floor(stars / oneThousand)}K+`;
      } else {
        starsAsText = `${stars}`;
      }
    }
    return starsAsText;
  } catch (err) {
    console.error(err);
    return null;
  }
};
