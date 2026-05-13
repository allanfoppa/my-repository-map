# WORKING WITH TWO DIFF USERS

If you want change only in one repository, go to project folder and type:

```bash
git config user.name "Your Name Here"
git config user.email your@email.example
```

For (global) default email configured in your ~/.gitconfig:

```bash
git config --global user.name "Your Name Here"
git config --global user.email your@email.example
```

```bash
# verify which user is set
git config user.name && git config user.email
```
