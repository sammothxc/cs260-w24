# notes.md
My file for taking notes throughout the CS260 course

## GitHub
#### Things I learned:
- How to handle merge conflicts using commands like `git fetch`, `git status`, and `git pull`
- What forking someone else's repository does
- What Markdown is and how to use it in .md files

## AWS - EC2
- SSH Command: `ssh -i ~/.ssh/keypair.pem ubuntu@52.205.244.9`
- IP Address: `52.205.244.9`
- EC2 class AMI ID: `ami-0b009f6c56cdd83ed`
- Region: US East (N. Virginia) - `us-east-1`

## Domain Name
- My domain: `rootrevolution.space`
- DNS records link what is typed in the record name to the IP specified in the record
- NS or nameservers store and organize DNS records

## HTTPS, TLS, and certificates
- Caddy has ACME support built into it by default
- `port 443` is the port for https
- the lock icon by the address bar indicates https

## HTML Structure

## HTML Input
| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

## HTML Media
- Canvas:
```
<canvas id="canvasDemo" width="300" height="200" style="border: 1px solid #000000"></canvas>
<script>
  const ctx = document.getElementById('canvasDemo').getContext('2d');
  ctx.beginPath();
  ctx.arc(150, 100, 50, 0, 2 * Math.PI);
  ctx.fillStyle = 'red';
  ctx.strokeStyle = 'red';
  ctx.fill();
  ctx.stroke();
</script>
```
- Scalable Vector Graphics:
```
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="red" style="border: 1px solid #000000">
  <circle cx="150" cy="100" r="50" />
</svg>
```
- Video:
```
<video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
```
- Audio:
```
<audio controls src="testAudio.mp3"></audio>
```
- Image:
```
<img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```
