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
