from pathlib import Path
from urllib.request import urlopen

root = Path(__file__).parent / 'assets'
root.mkdir(exist_ok=True)
assets = {
    'alex-portrait.jpg': 'https://archive.advertisingweek.com/images/userfiles/images/events/eu/2017/speakers/alex-cheeseman_500x500px.jpg',
    'alex-interview.jpg': 'https://img.youtube.com/vi/mVeYbjFuyvE/maxresdefault.jpg',
    'what-matters-most.jpg': 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts211/v4/c0/8b/1e/c08b1eaf-c61b-b570-70d1-2f759003a0af/mza_7155124361449245735.jpg/1200x1200bf-60.jpg',
}
for name, url in assets.items():
    with urlopen(url, timeout=30) as response:
        (root / name).write_bytes(response.read())
    print(name)
