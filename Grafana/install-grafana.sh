#!/bin/bash
# more info on installing Grafana can be found here: https://grafana.com/docs/grafana/latest/setup-grafana/installation/redhat-rhel-fedora/
sudo mkdir -p /etc/yum.repos.d/grafana.repo
sudo cat > /etc/yum.repos.d/grafana.repo <<EOF
[grafana]
name=grafana
baseurl=https://rpm.grafana.com
repo_gpgcheck=1
enabled=1
gpgcheck=1
gpgkey=https://rpm.grafana.com/gpg.key
sslverify=1
sslcacert=/etc/pki/tls/certs/ca-bundle.crt
exclude=*beta*
EOF
sudo yum install grafana-enterprise -y #install grafana
sudo systemctl daemon-reload
sudo systemctl start grafana-server #start grafana service
sleep 30s # wait until the service starts
sudo systemctl enable grafana-server.service #start grafana service during boot
sudo grafana-cli plugins install grafana-timestream-datasource #install plugin for timestream datasources
sudo systemctl restart grafana-server.service

