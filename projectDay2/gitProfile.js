
const username = "ikarnika847";

async function searchGitHubProfile(username) {
    try {
        const url = `https://api.github.com/users/${username}`;

        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                console.log("GitHub user nahi mila!");
                return;
            }

            throw new Error("API request failed");
        }

        const user = await response.json();

        console.log("Name:", user.name || "Not available");
        console.log("Username:", user.login);
        console.log("Bio:", user.bio || "No bio available");
        console.log("Public Repositories:", user.public_repos);
        console.log("Followers:", user.followers);
        console.log("Following:", user.following);
        console.log("Profile URL:", user.html_url);

    } catch (error) {
        console.log("Error:", error.message);
    }
}

searchGitHubProfile(username);
