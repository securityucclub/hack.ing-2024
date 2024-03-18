def generate_html_files(username):
    # File content templates
    file_content = {
        "ahorros.html": """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ahorros</title>
</head>
<body>
    <h1>Welcome, {}!</h1>
    <p>This is your Ahorros page.</p>
</body>
</html>
""".format(username),

        "finanzas.html": """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Finanzas</title>
</head>
<body>
    <h1>Welcome, {}!</h1>
    <p>This is your Finanzas page.</p>
</body>
</html>
""".format(username),

        "portafolio.html": """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio</title>
</head>
<body>
    <h1>Welcome, {}!</h1>
    <p>This is your Portafolio page.</p>
</body>
</html>
""".format(username)
    }

    # Generate files
    for filename, content in file_content.items():
        with open(filename, "w") as file:
            file.write(content)


if __name__ == "__main__":
    username = input("Enter your username: ")
    generate_html_files(username)
