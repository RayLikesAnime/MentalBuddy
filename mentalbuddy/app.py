from flask import Flask ,render_template, request,jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api_key = "85b5218b2dea6d62c838a1ecb699ba4e"
# Last.fm base URL for track pages
lastfm_base_url = "https://www.last.fm/music/"

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/recommendations", methods=["POST"])
def get_recommendations():
    data = request.get_json()
    mood = data.get("mood")

    # Call your get_song_recommendations function here
    recommendations = get_song_recommendations(mood)
    return jsonify(recommendations)

def get_song_recommendations(mood):
    # Define the Last.fm API endpoint for tag-based search
    endpoint = "tag.gettoptracks"

    # Create the API request URL
    url = f"http://ws.audioscrobbler.com/2.0/?method={endpoint}&tag={mood}&api_key={api_key}&format=json"

    try:
        # Send a GET request to the Last.fm API
        response = requests.get(url)

        # Check if the request was successful
        if response.status_code == 200:
            data = response.json()

            # Parse and return recommended tracks with hyperlinks
            if "tracks" in data and "track" in data["tracks"]:
                tracks = data["tracks"]["track"]
                recommendations = []

                for track in tracks:
                    song_name = track["name"]
                    artist_name = track["artist"]["name"]
                    song_link = f"{lastfm_base_url}{artist_name.replace(' ', '+')}/{song_name.replace(' ', '+')}"

                    recommendation = f'<a href="{song_link}" target="_blank">Track: {song_name} by {artist_name}</a>'
                    recommendations.append(recommendation)

                return recommendations

    except requests.exceptions.RequestException as e:
        pass

    return []

if __name__ == "__main__":
    app.run(debug=True)