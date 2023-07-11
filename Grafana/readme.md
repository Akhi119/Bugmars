### Grafana 

[Grafana-installation-doc](https://grafana.com/docs/grafana/latest/setup-grafana/installation/redhat-rhel-fedora/)

- execute the script(install-grafana.sh) which will install the Grafana, start the service and installs grafana-timestream-datasource plugin

- To access the grafana server running on port 3000, open 3000 port on ec2 security group from your source IP address:
http://44.205.167.195:3000  

- update the below IAM permissions for the ec2-assume-role attached to the instance:
```
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["timestream:*"],
      "Resource": "*"
    }
  ]
}
```

- After logging in, navigate to home -> add new datasource -> search for time-stream -> Authentication provider(AWS SDK Default) -> Default Region(us-east-1), now you should be able to view the timestream database since we provided the required permissions
