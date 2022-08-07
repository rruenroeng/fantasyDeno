## Lessons Learned Day 1
# Getting Deno Setup
  * This was mostly a smooth process. Went to both Deno and Fresh's pages and got things initialized without a lot of problems.

# Getting .env file setup and configured
  * Again and again, Docker and the application were having trouble seeing the .env variables loaded by Deno.
  * A major contributor to this was calling `docker-compose up` and `deno task start` from the top-level directory. You need to be in the '/app' directory for the variables to be respected. 

# Getting Docker setup
  * Wasted way too much time with this. )-:
  * Misread the Docker documentation and installed an earlier version of Docker (not a big deal).
  * Uninstalled `docker` and `docker-compose` and reinstalled it to be sure everything was up to date on the latest versions.
  * Need to call `docker-compose up` and not `docker-compose-create`. That likely ran me into some problems.
  * In addition there are issues with permissions with Docker in Linux. Only the root user, by default, has the permissions necessary to get a docker container downloaded and installed. `sudo docker-compose up` resolved this.
  * Maybe because of the debacle of calling `docker-compose-create`, not calling things as the root user, and the versioning of `docker` and `docker-compose`, Docker/Ubuntu became very unhappy with trying to install the pg Docker container.
    - [Docker & Postgres: Failed to bind tcp 0.0.0.0:5432 address already in use](https://stackoverflow.com/questions/38249434/docker-postgres-failed-to-bind-tcp-0-0-0-05432-address-already-in-use)
    - `sudo netstat -tulpn | grep LISTEN` yielded nothing on port 5432, yet the container failed time and time again.
    - Deleting the container, restarting the computer, reinstalling `docker-compose` and `docker` all did not resolve the issue. The error continued to be thrown when calling `docker-compose up`
    - The solution was simple albeit very confusing. Change the port of the .env file to point instead to a different port and then call `docker-compose-up` This worked perfectly. In fact, after deleting the new container and switching the port BACK to 5432 worked as well. Very confusing, but it's working!

# Understanding zod
  * zod is a really powerful data validator! I watched [this lovely video by Leigh Halliday](https://www.youtube.com/watch?v=_K34O0NcKAM) to learn about the basics of zod.
  TODO: Read the zod docs

# Import map not allowing for relative paths to be respected in VS Code
  *I hate this. I don't understand why it isn't working in Linux VS Code, but works for CJ on Windows. 
TODO: Resolve this sometime

# Building models
  * When spinning up the application after getting the docker container going saw [Cannot read property 'table' of undefined](https://github.com/eveningkid/denodb/issues/182) error a whole bunch.
  * "main.ts" is the entry point for the application's code. To get denodb to configure the database, it needs to 'link' with the models and then 'sync' with the database. (Eventually need to be careful since it drops all the tables every time it does this.)
  * db.ts needs to be imported into main.ts to get called when the project is getting setup and then the connect function needs to be invoked.
  TODO: Learn about main.ts
  TODO: Read denodb's documentation
# Docker Extension on VS Code Not Giving Easy Access to Containers
  * The root user is the only user who has privileges to interact with Docker containers. This also the reason why all of the Docker commands need to be called with Sudo. 
TODO: Figure out a way to allow the logged in user/VS Code to be able to interact with containers on Linux.

## Personal Reflection Day 1
  * A lot of mistakes were made. The big contributors to those mistakes are as follows:
    - Not reading the docs closely enough and hoping that I can simply follow the framework that CJ put in place in his Fresh-Spots project.
    - Not making sure to check that there isn't specific steps that need to be taken if you're working on a Linux OS.
    - Obsessing on smaller things that are a pain in the butt, but aren't actually blocking progress from being made. Rather than tabling smaller things like that for the future, allowing it to derail the project for an hour or so. Those are better to be resolved on days when I'm not trying to make progress/I'm catching up on the issues that have arisen.
    - I stuck with it for a whole day though, applied a lot of what I saw CJ do and what I read through the documentation. I actually got a whole lot into the app and feel like I have a pretty good mental map of how it's all hooked up.