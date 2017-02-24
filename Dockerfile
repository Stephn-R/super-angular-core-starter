# Grab the .NET Core Image
FROM microsoft/aspnetcore-build:1.1.0-projectjson

# Copy the application over
WORKDIR /dotnetapp
COPY project.json .

# Restore Nuget Packages
RUN dotnet restore

# Prepare the application
COPY . .
RUN dotnet publish -c Release -o out

# Run the application
ENTRYPOINT ["dotnet", "out/Angular2_NET_Starter.dll"]
