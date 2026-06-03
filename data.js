const DATA = {
  "stages": [
    {
      "id": "basic",
      "title": "第 1 村：电脑基础村",
      "desc": "电脑、系统、文件、软件、常见故障。",
      "lessons": [
        {
          "id": 1,
          "title": "电脑由哪些部分组成",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 11,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 2,
          "title": "CPU、内存、硬盘分别干什么",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 14,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 3,
          "title": "Windows 文件和文件夹",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 17,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 4,
          "title": "常见文件后缀名",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 5,
          "title": "压缩包是什么",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 8,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 6,
          "title": "软件安装和卸载",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 11,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 7,
          "title": "什么是系统盘",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 14,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 8,
          "title": "常见电脑故障判断",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 17,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 9,
          "title": "电脑卡顿怎么初步判断",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 10,
          "title": "小白必会的电脑维护习惯",
          "topic": "电脑、系统、文件、软件、常见故障。",
          "difficulty": 1,
          "minutes": 8,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        }
      ]
    },
    {
      "id": "network",
      "title": "第 2 村：网络村",
      "desc": "IP、端口、DNS、网关、网站访问流程。",
      "lessons": [
        {
          "id": 11,
          "title": "什么是网络",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 11,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 12,
          "title": "什么是 IP 地址",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 14,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 13,
          "title": "公网 IP 和内网 IP",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 17,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 14,
          "title": "什么是端口",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 20,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 15,
          "title": "什么是 DNS",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 8,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 16,
          "title": "什么是网关",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 11,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 17,
          "title": "ping 命令",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 14,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 18,
          "title": "浏览器访问网站的过程",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 17,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 19,
          "title": "为什么网站打不开",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 20,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 20,
          "title": "路由器和交换机基础",
          "topic": "IP、端口、DNS、网关、网站访问流程。",
          "difficulty": 1,
          "minutes": 8,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        }
      ]
    },
    {
      "id": "linux",
      "title": "第 3 村：Linux 山谷",
      "desc": "终端、目录、文件、权限、文本、系统资源。",
      "lessons": [
        {
          "id": 21,
          "title": "Linux 是什么",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 1,
          "minutes": 11,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 22,
          "title": "终端是什么",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 1,
          "minutes": 14,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 23,
          "title": "whoami、pwd、date",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 1,
          "minutes": 17,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 24,
          "title": "Linux 目录结构",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 1,
          "minutes": 20,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 25,
          "title": "ls 查看文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 8,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 26,
          "title": "cd 切换目录",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 11,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 27,
          "title": "mkdir 创建目录",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 14,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 28,
          "title": "touch 创建文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 17,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 29,
          "title": "cp 复制文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 20,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 30,
          "title": "mv 移动和改名",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 8,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 31,
          "title": "rm 删除文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 32,
          "title": "cat 查看文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 14,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 33,
          "title": "grep 搜索内容",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 17,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 34,
          "title": "nano 编辑文件",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 20,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 35,
          "title": "权限 rwx",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 8,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 36,
          "title": "chmod 修改权限",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 37,
          "title": "sudo 提权",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 14,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 38,
          "title": "压缩和解压",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 17,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        },
        {
          "id": 39,
          "title": "查看系统资源",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 40,
          "title": "Linux 基础综合练习",
          "topic": "终端、目录、文件、权限、文本、系统资源。",
          "difficulty": 2,
          "minutes": 8,
          "story": "你进入 Linux 山谷。黑窗口不可怕，它只是用命令控制电脑的方式。",
          "explain": [
            "Linux 学习要记场景：我在哪、我要看什么、我要改什么、我要启动什么。",
            "目录和文件是基础，权限决定谁能读、写、执行。",
            "命令不用一次背完，遇到场景再反复用。"
          ],
          "commands": [
            "whoami",
            "pwd",
            "date",
            "ls -la",
            "cd /var/www/html",
            "mkdir demo",
            "touch index.html",
            "cat index.html",
            "grep error app.log",
            "chmod +x script.sh",
            "sudo whoami"
          ],
          "tasks": [
            "查看当前用户",
            "查看当前目录",
            "列出文件",
            "创建目录和文件",
            "理解 sudo 的作用"
          ],
          "quiz": [
            [
              "查看当前目录用哪个命令？",
              [
                "whoami",
                "pwd",
                "date",
                "clear"
              ],
              1
            ],
            [
              "创建目录用？",
              [
                "mkdir",
                "touch",
                "cat",
                "grep"
              ],
              0
            ],
            [
              "临时提权常用？",
              [
                "sudo",
                "pwd",
                "date",
                "ls"
              ],
              0
            ]
          ],
          "cheat": [
            "当前目录：pwd",
            "看文件：ls -la",
            "创建目录：mkdir",
            "查看文本：cat/less/tail",
            "权限：chmod"
          ]
        }
      ]
    },
    {
      "id": "server",
      "title": "第 4 村：服务器城堡",
      "desc": "云服务器、SSH、安全组、防火墙、资源检查。",
      "lessons": [
        {
          "id": 41,
          "title": "什么是服务器",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 11,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 42,
          "title": "云服务器和家用电脑区别",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 14,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 43,
          "title": "购买服务器要看什么",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 44,
          "title": "SSH 是什么",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 20,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 45,
          "title": "用 SSH 连接服务器",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 8,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 46,
          "title": "root 用户和普通用户",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 11,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 47,
          "title": "安全组是什么",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 14,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 48,
          "title": "防火墙是什么",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 49,
          "title": "查看系统信息",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 2,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 50,
          "title": "查看磁盘空间",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 8,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 51,
          "title": "查看内存和 CPU",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 11,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 52,
          "title": "服务器时间和时区",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 14,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 53,
          "title": "上传下载文件",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 54,
          "title": "服务器重启注意事项",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 20,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 55,
          "title": "服务器基础综合练习",
          "topic": "云服务器、SSH、安全组、防火墙、资源检查。",
          "difficulty": 3,
          "minutes": 8,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        }
      ]
    },
    {
      "id": "web",
      "title": "第 5 村：建站工坊",
      "desc": "Nginx、网站目录、域名、HTTPS、打不开排查。",
      "lessons": [
        {
          "id": 56,
          "title": "网站是怎么运行的",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 11,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 57,
          "title": "Nginx 是什么",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 14,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 58,
          "title": "安装 Nginx",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 17,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 59,
          "title": "启动和停止服务",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 60,
          "title": "网站目录在哪里",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 8,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 61,
          "title": "创建第一个网页",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 11,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 62,
          "title": "浏览器访问服务器 IP",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 14,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 63,
          "title": "绑定域名",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 17,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 64,
          "title": "配置 HTTPS",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 20,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 65,
          "title": "网站打不开排查",
          "topic": "Nginx、网站目录、域名、HTTPS、打不开排查。",
          "difficulty": 3,
          "minutes": 8,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        }
      ]
    },
    {
      "id": "db",
      "title": "第 6 村：数据库矿场",
      "desc": "MySQL、表、字段、增删改查、备份恢复、Redis。",
      "lessons": [
        {
          "id": 66,
          "title": "什么是数据库",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 67,
          "title": "MySQL 是什么",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 14,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 68,
          "title": "安装 MySQL",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 17,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 69,
          "title": "数据库、数据表、字段",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 20,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 70,
          "title": "新增数据",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 8,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 71,
          "title": "查询数据",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 72,
          "title": "修改数据",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 14,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 73,
          "title": "删除数据",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 17,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 74,
          "title": "数据库用户和权限",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 3,
          "minutes": 20,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 75,
          "title": "数据库备份和恢复",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 4,
          "minutes": 8,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 76,
          "title": "Redis 是什么",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 4,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 77,
          "title": "数据库连接失败排查",
          "topic": "MySQL、表、字段、增删改查、备份恢复、Redis。",
          "difficulty": 4,
          "minutes": 14,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        }
      ]
    },
    {
      "id": "docker",
      "title": "第 7 村：Docker 港口",
      "desc": "镜像、容器、端口映射、数据卷、Compose。",
      "lessons": [
        {
          "id": 78,
          "title": "Docker 是什么",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 17,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 79,
          "title": "镜像是什么",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 20,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 80,
          "title": "容器是什么",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 8,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 81,
          "title": "安装 Docker",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 11,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 82,
          "title": "docker run",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 14,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 83,
          "title": "docker ps",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 17,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 84,
          "title": "docker logs",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 20,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 85,
          "title": "端口映射",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 8,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 86,
          "title": "数据卷",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 11,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 87,
          "title": "Docker Compose",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 14,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 88,
          "title": "用 Docker 部署 Nginx",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 17,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 89,
          "title": "用 Docker 部署 MySQL",
          "topic": "镜像、容器、端口映射、数据卷、Compose。",
          "difficulty": 4,
          "minutes": 20,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        }
      ]
    },
    {
      "id": "ops",
      "title": "第 8 村：排错迷宫",
      "desc": "服务、端口、防火墙、安全组、日志、资源、502。",
      "lessons": [
        {
          "id": 90,
          "title": "排错思路",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 8,
          "story": "这是小白成长路线的地基关卡。先把电脑基础概念弄清，再学网络、服务器和 Linux。",
          "explain": [
            "技术学习最怕跳级。先理解是什么，再理解为什么，最后才是怎么做。",
            "电脑基础包括硬件、系统、文件、软件、压缩包、常见故障。",
            "这些知识会在后面的服务器、建站和排错中反复出现。"
          ],
          "commands": [],
          "tasks": [
            "读懂本关概念",
            "用自己的话解释",
            "完成通关测试",
            "记录一个不懂的词",
            "进入下一关"
          ],
          "quiz": [
            [
              "学习新技术比较合理的顺序是？",
              [
                "先死背命令",
                "先理解概念再动手",
                "直接删系统测试",
                "只看标题"
              ],
              1
            ],
            [
              "文件夹更像什么？",
              [
                "分类柜",
                "显示器",
                "网线",
                "电源"
              ],
              0
            ],
            [
              "遇到电脑问题先应该？",
              [
                "乱删文件",
                "确认现象",
                "砸键盘",
                "重装一切"
              ],
              1
            ]
          ],
          "cheat": [
            "先理解概念",
            "再动手练习",
            "最后做项目",
            "遇到问题先确认现象"
          ]
        },
        {
          "id": 91,
          "title": "服务是否启动",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 11,
          "story": "你进入排错迷宫。真正有价值的能力，是出问题时能一步步定位。",
          "explain": [
            "排错要按顺序：确认现象 → 查服务 → 查端口 → 查配置 → 查日志 → 查资源 → 查外部安全组。",
            "不要一遇到问题就重装系统或乱删文件。",
            "日志是服务器给你的线索。"
          ],
          "commands": [
            "systemctl status 服务名",
            "ss -tulnp",
            "df -h",
            "free -h",
            "tail -f 日志文件",
            "journalctl -xe"
          ],
          "tasks": [
            "写出故障现象",
            "检查服务状态",
            "检查端口监听",
            "查看日志",
            "总结原因"
          ],
          "quiz": [
            [
              "排错时最不推荐的做法是？",
              [
                "先确认现象",
                "查看日志",
                "按顺序排查",
                "没看原因就乱改配置"
              ],
              3
            ],
            [
              "查看服务状态常用？",
              [
                "systemctl status",
                "mkdir",
                "touch",
                "zip"
              ],
              0
            ],
            [
              "实时查看日志常用？",
              [
                "tail -f",
                "pwd",
                "chmod",
                "free"
              ],
              0
            ]
          ],
          "cheat": [
            "服务：systemctl status",
            "端口：ss -tulnp",
            "磁盘：df -h",
            "内存：free -h",
            "日志：tail -f"
          ]
        },
        {
          "id": 92,
          "title": "端口是否监听",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 14,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 93,
          "title": "防火墙是否放行",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 94,
          "title": "安全组是否放行",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 20,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 95,
          "title": "磁盘是否满了",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 8,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 96,
          "title": "内存是否爆了",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 11,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 97,
          "title": "查看 Nginx 日志",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 14,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 98,
          "title": "查看系统日志",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 17,
          "story": "你进入排错迷宫。真正有价值的能力，是出问题时能一步步定位。",
          "explain": [
            "排错要按顺序：确认现象 → 查服务 → 查端口 → 查配置 → 查日志 → 查资源 → 查外部安全组。",
            "不要一遇到问题就重装系统或乱删文件。",
            "日志是服务器给你的线索。"
          ],
          "commands": [
            "systemctl status 服务名",
            "ss -tulnp",
            "df -h",
            "free -h",
            "tail -f 日志文件",
            "journalctl -xe"
          ],
          "tasks": [
            "写出故障现象",
            "检查服务状态",
            "检查端口监听",
            "查看日志",
            "总结原因"
          ],
          "quiz": [
            [
              "排错时最不推荐的做法是？",
              [
                "先确认现象",
                "查看日志",
                "按顺序排查",
                "没看原因就乱改配置"
              ],
              3
            ],
            [
              "查看服务状态常用？",
              [
                "systemctl status",
                "mkdir",
                "touch",
                "zip"
              ],
              0
            ],
            [
              "实时查看日志常用？",
              [
                "tail -f",
                "pwd",
                "chmod",
                "free"
              ],
              0
            ]
          ],
          "cheat": [
            "服务：systemctl status",
            "端口：ss -tulnp",
            "磁盘：df -h",
            "内存：free -h",
            "日志：tail -f"
          ]
        },
        {
          "id": 99,
          "title": "网站 502 怎么排查",
          "topic": "服务、端口、防火墙、安全组、日志、资源、502。",
          "difficulty": 4,
          "minutes": 20,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        }
      ]
    },
    {
      "id": "security",
      "title": "第 9 村：安全哨塔",
      "desc": "只做合法、防御、安全加固。",
      "lessons": [
        {
          "id": 100,
          "title": "网络安全是什么",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 8,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 101,
          "title": "常见安全风险",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 11,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 102,
          "title": "弱密码风险",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 14,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 103,
          "title": "端口暴露风险",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 17,
          "story": "你进入网络村。服务器、建站、排错、安全都离不开网络基础。",
          "explain": [
            "IP 像门牌号，端口像门号，DNS 像电话簿。",
            "浏览器访问网站时，先解析域名，再连接 IP 和端口。",
            "网站打不开，要分清是解析问题、网络问题、端口问题，还是服务问题。"
          ],
          "commands": [
            "ip addr",
            "ping baidu.com",
            "curl baidu.com",
            "ss -tulnp",
            "traceroute baidu.com"
          ],
          "tasks": [
            "说出 IP 的作用",
            "说出端口的作用",
            "说出 DNS 的作用",
            "用 ping 测试网络",
            "用 ss 查看端口"
          ],
          "quiz": [
            [
              "DNS 的主要作用是？",
              [
                "把域名解析成 IP",
                "清理硬盘",
                "增加内存",
                "压缩文件"
              ],
              0
            ],
            [
              "HTTPS 默认端口通常是？",
              [
                "22",
                "80",
                "443",
                "3306"
              ],
              2
            ],
            [
              "测试网络连通常用？",
              [
                "ping",
                "chmod",
                "mkdir",
                "docker"
              ],
              0
            ]
          ],
          "cheat": [
            "IP：门牌号",
            "端口：门号",
            "DNS：域名转 IP",
            "HTTP：80",
            "HTTPS：443"
          ]
        },
        {
          "id": 104,
          "title": "Nmap 基础认识",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 20,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 105,
          "title": "Web 安全基础概念",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 8,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 106,
          "title": "SQL 注入是什么",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 11,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 107,
          "title": "XSS 是什么",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 14,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        },
        {
          "id": 108,
          "title": "服务器安全加固",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 109,
          "title": "日志安全检查",
          "topic": "只做合法、防御、安全加固。",
          "difficulty": 5,
          "minutes": 20,
          "story": "你进入安全哨塔。本模块只做合法、防御、安全加固，不做非法攻击教程。",
          "explain": [
            "安全的核心不是炫技，而是减少风险。",
            "常见问题包括弱密码、无用端口暴露、软件长期不更新、日志无人查看。",
            "学习安全要守法，只在自己授权的环境中测试。"
          ],
          "commands": [
            "ss -tulnp",
            "last",
            "journalctl -xe",
            "sudo ufw status",
            "sudo apt update && sudo apt upgrade"
          ],
          "tasks": [
            "查看开放端口",
            "检查登录日志",
            "关闭无用服务",
            "更新系统",
            "写一份安全加固清单"
          ],
          "quiz": [
            [
              "服务器安全加固不建议做的是？",
              [
                "使用强密码",
                "关闭无用端口",
                "开放所有端口",
                "查看登录日志"
              ],
              2
            ],
            [
              "查看最近登录常用？",
              [
                "last",
                "pwd",
                "mkdir",
                "zip"
              ],
              0
            ],
            [
              "安全测试应该在什么环境中进行？",
              [
                "任意网站",
                "授权环境",
                "陌生服务器",
                "公共平台"
              ],
              1
            ]
          ],
          "cheat": [
            "开放端口：ss -tulnp",
            "登录记录：last",
            "系统日志：journalctl",
            "更新系统：apt update && apt upgrade"
          ]
        }
      ]
    },
    {
      "id": "project",
      "title": "第 10 村：项目副本",
      "desc": "项目实战：从部署到排错和安全。",
      "lessons": [
        {
          "id": 110,
          "title": "项目：部署个人主页",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 8,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 111,
          "title": "项目：部署 WordPress",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 11,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 112,
          "title": "项目：Docker 部署网站",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 14,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 113,
          "title": "项目：服务器安全加固",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 17,
          "story": "你拿到了一台云服务器。它是一台长期在线的远程电脑，需要会连接、会查看、会保护。",
          "explain": [
            "SSH 用来远程操作服务器，默认端口通常是 22。",
            "安全组是云平台层面的门，防火墙是系统层面的门。",
            "排查服务器问题时，要先看资源、服务、端口和日志。"
          ],
          "commands": [
            "ssh root@服务器IP",
            "cat /etc/os-release",
            "df -h",
            "free -h",
            "uptime",
            "systemctl status sshd",
            "scp file.txt root@IP:/root/"
          ],
          "tasks": [
            "确认服务器公网 IP",
            "确认 22 端口放行",
            "用 SSH 连接",
            "查看磁盘和内存",
            "记录系统版本"
          ],
          "quiz": [
            [
              "SSH 默认端口通常是？",
              [
                "21",
                "22",
                "80",
                "3306"
              ],
              1
            ],
            [
              "查看磁盘空间常用？",
              [
                "df -h",
                "pwd",
                "cat",
                "ssh"
              ],
              0
            ],
            [
              "云服务器安全组主要控制什么？",
              [
                "端口放行",
                "屏幕亮度",
                "键盘输入",
                "文件名"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：ssh root@IP",
            "磁盘：df -h",
            "内存：free -h",
            "系统：cat /etc/os-release"
          ]
        },
        {
          "id": 114,
          "title": "项目：网站打不开排查",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 20,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 115,
          "title": "项目：MySQL 备份恢复",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 8,
          "story": "你进入数据库矿场。网站的用户、订单、文章和配置，需要可靠保存。",
          "explain": [
            "数据库可以理解为更专业、更适合程序使用的表格系统。",
            "MySQL 用来保存长期数据，Redis 常用作缓存。",
            "数据库最基础操作是增删改查，最重要的保命操作是备份恢复。"
          ],
          "commands": [
            "mysql -u root -p",
            "SHOW DATABASES;",
            "SELECT * FROM users;",
            "mysqldump -u root -p 数据库名 > backup.sql",
            "systemctl status mysql",
            "ss -tulnp | grep 3306"
          ],
          "tasks": [
            "理解数据库/表/字段",
            "认识 SELECT 查询",
            "知道备份命令",
            "检查 MySQL 服务状态",
            "记录连接失败排查步骤"
          ],
          "quiz": [
            [
              "SQL 查询数据通常使用？",
              [
                "SELECT",
                "DELETE",
                "UPDATE",
                "INSERT"
              ],
              0
            ],
            [
              "MySQL 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              2
            ],
            [
              "数据库备份常用工具是？",
              [
                "mysqldump",
                "grep",
                "ping",
                "chmod"
              ],
              0
            ]
          ],
          "cheat": [
            "连接：mysql -u root -p",
            "查库：SHOW DATABASES;",
            "备份：mysqldump",
            "端口：3306"
          ]
        },
        {
          "id": 116,
          "title": "项目：配置 HTTPS",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 11,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 117,
          "title": "项目：Nginx 反向代理",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 14,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        },
        {
          "id": 118,
          "title": "项目：Docker Compose 部署服务",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 17,
          "story": "你来到 Docker 港口。镜像像模板，容器像运行起来的小房间，每个服务可以独立运行。",
          "explain": [
            "Docker 解决环境不一致的问题。",
            "镜像是静态模板，容器是运行实例。",
            "端口映射让外部可以访问容器里的服务，数据卷让数据不随容器删除。"
          ],
          "commands": [
            "docker ps",
            "docker ps -a",
            "docker images",
            "docker logs 容器名",
            "docker run -d --name web -p 8080:80 nginx",
            "docker compose up -d"
          ],
          "tasks": [
            "查看镜像",
            "查看容器",
            "运行 Nginx 容器",
            "查看容器日志",
            "理解端口映射"
          ],
          "quiz": [
            [
              "Docker 镜像更像什么？",
              [
                "运行中的进程",
                "安装包/模板",
                "显示器",
                "网线"
              ],
              1
            ],
            [
              "查看运行中容器用？",
              [
                "docker ps",
                "docker rm",
                "docker build",
                "docker clear"
              ],
              0
            ],
            [
              "端口映射参数通常是？",
              [
                "-p",
                "-v",
                "-d",
                "--name"
              ],
              0
            ]
          ],
          "cheat": [
            "查看容器：docker ps -a",
            "看日志：docker logs 容器名",
            "后台运行：-d",
            "端口映射：-p 8080:80"
          ]
        },
        {
          "id": 119,
          "title": "项目：独立上线一个小网站",
          "topic": "项目实战：从部署到排错和安全。",
          "difficulty": 5,
          "minutes": 20,
          "story": "你开始把服务器变成真正能访问的网站。建站不是背命令，而是搞清访问链路：浏览器 → 域名 → IP → 端口 → 服务 → 网站目录。",
          "explain": [
            "网站的本质是服务器对浏览器请求做出响应。",
            "Nginx 常用来提供静态网页、反向代理、HTTPS 证书接入。",
            "网站打不开时，优先检查：解析、服务、端口、防火墙/安全组、日志。"
          ],
          "commands": [
            "sudo apt update",
            "sudo apt install nginx -y",
            "sudo systemctl status nginx",
            "sudo nginx -t",
            "ss -tulnp | grep -E '80|443'",
            "curl 127.0.0.1",
            "tail -f /var/log/nginx/error.log"
          ],
          "tasks": [
            "说出网站访问链路",
            "检查 Nginx 服务状态",
            "检查 80/443 端口",
            "用 curl 本机测试",
            "查看 Nginx 错误日志"
          ],
          "quiz": [
            [
              "网站打不开时，比较合理的第一步是？",
              [
                "直接重装系统",
                "先检查服务和端口",
                "删除网站目录",
                "关闭所有防火墙"
              ],
              1
            ],
            [
              "Nginx 配置检查命令是？",
              [
                "nginx -t",
                "nginx -del",
                "nginx -clear",
                "nginx -format"
              ],
              0
            ],
            [
              "HTTP 默认端口通常是？",
              [
                "22",
                "80",
                "3306",
                "6379"
              ],
              1
            ]
          ],
          "cheat": [
            "服务：systemctl status nginx",
            "端口：ss -tulnp | grep 80",
            "日志：tail -f /var/log/nginx/error.log",
            "配置检查：nginx -t"
          ]
        }
      ]
    }
  ],
  "commands": [
    {
      "name": "pwd",
      "desc": "查看当前所在目录",
      "example": "pwd",
      "cat": "文件目录"
    },
    {
      "name": "ls",
      "desc": "列出目录内容",
      "example": "ls -la",
      "cat": "文件目录"
    },
    {
      "name": "cd",
      "desc": "切换目录",
      "example": "cd /var/www/html",
      "cat": "文件目录"
    },
    {
      "name": "mkdir",
      "desc": "创建目录",
      "example": "mkdir test",
      "cat": "文件目录"
    },
    {
      "name": "touch",
      "desc": "创建空文件",
      "example": "touch index.html",
      "cat": "文件目录"
    },
    {
      "name": "cp",
      "desc": "复制文件",
      "example": "cp a.txt b.txt",
      "cat": "文件目录"
    },
    {
      "name": "mv",
      "desc": "移动或重命名",
      "example": "mv old.txt new.txt",
      "cat": "文件目录"
    },
    {
      "name": "rm",
      "desc": "删除文件",
      "example": "rm file.txt",
      "cat": "文件目录"
    },
    {
      "name": "find",
      "desc": "查找文件",
      "example": "find / -name nginx.conf 2>/dev/null",
      "cat": "文件目录"
    },
    {
      "name": "cat",
      "desc": "查看文件内容",
      "example": "cat file.txt",
      "cat": "文本查看"
    },
    {
      "name": "less",
      "desc": "分页查看文本",
      "example": "less /var/log/syslog",
      "cat": "文本查看"
    },
    {
      "name": "head",
      "desc": "查看文件开头",
      "example": "head -n 20 file.log",
      "cat": "文本查看"
    },
    {
      "name": "tail",
      "desc": "查看文件尾部",
      "example": "tail -f error.log",
      "cat": "文本查看"
    },
    {
      "name": "grep",
      "desc": "搜索文本",
      "example": "grep error app.log",
      "cat": "文本查看"
    },
    {
      "name": "nano",
      "desc": "编辑文本",
      "example": "nano config.conf",
      "cat": "文本编辑"
    },
    {
      "name": "vim",
      "desc": "编辑文本",
      "example": "vim config.conf",
      "cat": "文本编辑"
    },
    {
      "name": "chmod",
      "desc": "修改权限",
      "example": "chmod +x script.sh",
      "cat": "权限用户"
    },
    {
      "name": "chown",
      "desc": "修改所有者",
      "example": "chown www:www index.html",
      "cat": "权限用户"
    },
    {
      "name": "useradd",
      "desc": "创建用户",
      "example": "useradd testuser",
      "cat": "权限用户"
    },
    {
      "name": "passwd",
      "desc": "修改密码",
      "example": "passwd testuser",
      "cat": "权限用户"
    },
    {
      "name": "sudo",
      "desc": "临时提权",
      "example": "sudo systemctl restart nginx",
      "cat": "权限用户"
    },
    {
      "name": "df",
      "desc": "查看磁盘空间",
      "example": "df -h",
      "cat": "系统状态"
    },
    {
      "name": "du",
      "desc": "查看目录大小",
      "example": "du -sh /var/log",
      "cat": "系统状态"
    },
    {
      "name": "free",
      "desc": "查看内存",
      "example": "free -h",
      "cat": "系统状态"
    },
    {
      "name": "top",
      "desc": "实时查看资源",
      "example": "top",
      "cat": "系统状态"
    },
    {
      "name": "htop",
      "desc": "更友好的资源查看",
      "example": "htop",
      "cat": "系统状态"
    },
    {
      "name": "uptime",
      "desc": "查看运行时间和负载",
      "example": "uptime",
      "cat": "系统状态"
    },
    {
      "name": "ps",
      "desc": "查看进程",
      "example": "ps aux | grep nginx",
      "cat": "进程服务"
    },
    {
      "name": "kill",
      "desc": "结束进程",
      "example": "kill PID",
      "cat": "进程服务"
    },
    {
      "name": "systemctl",
      "desc": "管理服务",
      "example": "systemctl status nginx",
      "cat": "进程服务"
    },
    {
      "name": "journalctl",
      "desc": "查看系统日志",
      "example": "journalctl -xe",
      "cat": "日志"
    },
    {
      "name": "ip",
      "desc": "查看 IP",
      "example": "ip addr",
      "cat": "网络检测"
    },
    {
      "name": "ping",
      "desc": "测试网络连通",
      "example": "ping baidu.com",
      "cat": "网络检测"
    },
    {
      "name": "curl",
      "desc": "请求网页/API",
      "example": "curl 127.0.0.1",
      "cat": "网络检测"
    },
    {
      "name": "ss",
      "desc": "查看端口监听",
      "example": "ss -tulnp",
      "cat": "网络检测"
    },
    {
      "name": "traceroute",
      "desc": "路由跟踪",
      "example": "traceroute baidu.com",
      "cat": "网络检测"
    },
    {
      "name": "ssh",
      "desc": "远程连接服务器",
      "example": "ssh root@服务器IP",
      "cat": "服务器"
    },
    {
      "name": "scp",
      "desc": "远程复制文件",
      "example": "scp file.txt root@IP:/root/",
      "cat": "服务器"
    },
    {
      "name": "rsync",
      "desc": "同步文件",
      "example": "rsync -av site/ root@IP:/var/www/site/",
      "cat": "服务器"
    },
    {
      "name": "nginx -t",
      "desc": "检查 Nginx 配置",
      "example": "nginx -t",
      "cat": "Nginx"
    },
    {
      "name": "certbot",
      "desc": "申请 HTTPS 证书",
      "example": "certbot --nginx -d example.com",
      "cat": "Nginx"
    },
    {
      "name": "mysql",
      "desc": "连接 MySQL",
      "example": "mysql -u root -p",
      "cat": "MySQL"
    },
    {
      "name": "mysqldump",
      "desc": "备份 MySQL",
      "example": "mysqldump -u root -p db > db.sql",
      "cat": "MySQL"
    },
    {
      "name": "redis-cli",
      "desc": "连接 Redis",
      "example": "redis-cli ping",
      "cat": "Redis"
    },
    {
      "name": "docker ps",
      "desc": "查看容器",
      "example": "docker ps",
      "cat": "Docker"
    },
    {
      "name": "docker logs",
      "desc": "查看容器日志",
      "example": "docker logs 容器名",
      "cat": "Docker"
    },
    {
      "name": "docker run",
      "desc": "运行容器",
      "example": "docker run -d -p 8080:80 nginx",
      "cat": "Docker"
    },
    {
      "name": "docker exec",
      "desc": "进入容器",
      "example": "docker exec -it 容器名 bash",
      "cat": "Docker"
    },
    {
      "name": "docker compose",
      "desc": "编排服务",
      "example": "docker compose up -d",
      "cat": "Docker"
    },
    {
      "name": "tar",
      "desc": "压缩解压",
      "example": "tar -zxvf file.tar.gz",
      "cat": "压缩解压"
    },
    {
      "name": "zip",
      "desc": "压缩文件",
      "example": "zip -r site.zip site/",
      "cat": "压缩解压"
    },
    {
      "name": "unzip",
      "desc": "解压 zip",
      "example": "unzip site.zip",
      "cat": "压缩解压"
    }
  ],
  "troubles": [
    {
      "title": "网站打不开",
      "tags": [
        "Nginx",
        "端口",
        "安全组"
      ],
      "steps": [
        "确认域名/IP 是否正确",
        "检查 Nginx 是否运行",
        "检查 80/443 端口是否监听",
        "检查服务器防火墙",
        "检查云服务器安全组",
        "查看 Nginx 错误日志"
      ],
      "commands": [
        "systemctl status nginx",
        "ss -tulnp | grep -E '80|443'",
        "curl 127.0.0.1",
        "nginx -t",
        "tail -f /var/log/nginx/error.log"
      ]
    },
    {
      "title": "SSH 连不上",
      "tags": [
        "SSH",
        "22端口",
        "安全组"
      ],
      "steps": [
        "确认服务器 IP",
        "确认账号密码/密钥",
        "检查 22 端口安全组",
        "检查 sshd 服务",
        "确认本地网络是否正常"
      ],
      "commands": [
        "ssh root@服务器IP",
        "systemctl status sshd",
        "ss -tulnp | grep 22",
        "ping 服务器IP"
      ]
    },
    {
      "title": "Nginx 启动失败",
      "tags": [
        "Nginx",
        "配置",
        "日志"
      ],
      "steps": [
        "先不要反复重启",
        "运行 nginx -t 检查配置",
        "查看错误日志",
        "根据提示修正配置文件",
        "重新加载 Nginx"
      ],
      "commands": [
        "nginx -t",
        "journalctl -xe",
        "tail -f /var/log/nginx/error.log",
        "systemctl reload nginx"
      ]
    },
    {
      "title": "磁盘满了",
      "tags": [
        "磁盘",
        "日志",
        "清理"
      ],
      "steps": [
        "查看磁盘整体空间",
        "找出大目录",
        "优先清理无用日志/缓存/备份",
        "不要乱删系统目录",
        "清理后再次检查"
      ],
      "commands": [
        "df -h",
        "du -sh /* 2>/dev/null",
        "du -sh /var/log/*",
        "journalctl --vacuum-time=7d"
      ]
    },
    {
      "title": "Docker 容器启动失败",
      "tags": [
        "Docker",
        "容器",
        "日志"
      ],
      "steps": [
        "查看容器状态",
        "查看容器日志",
        "检查端口是否冲突",
        "检查数据卷路径",
        "重新启动容器"
      ],
      "commands": [
        "docker ps -a",
        "docker logs 容器名",
        "ss -tulnp",
        "docker restart 容器名"
      ]
    },
    {
      "title": "MySQL 连接失败",
      "tags": [
        "MySQL",
        "数据库",
        "权限"
      ],
      "steps": [
        "检查 MySQL 服务状态",
        "确认端口 3306",
        "确认用户名密码",
        "确认数据库权限",
        "查看 MySQL 日志"
      ],
      "commands": [
        "systemctl status mysql",
        "ss -tulnp | grep 3306",
        "mysql -u root -p",
        "tail -f /var/log/mysql/error.log"
      ]
    },
    {
      "title": "网站 502",
      "tags": [
        "Nginx",
        "PHP",
        "反向代理"
      ],
      "steps": [
        "确认后端服务是否运行",
        "检查 Nginx upstream 配置",
        "查看 Nginx 错误日志",
        "检查 PHP-FPM/Node 服务",
        "重启后端服务"
      ],
      "commands": [
        "systemctl status php-fpm",
        "systemctl status php8.1-fpm",
        "tail -f /var/log/nginx/error.log",
        "nginx -t"
      ]
    },
    {
      "title": "服务器很卡",
      "tags": [
        "CPU",
        "内存",
        "磁盘"
      ],
      "steps": [
        "查看 CPU 负载",
        "查看内存占用",
        "查看磁盘是否满",
        "找出高占用进程",
        "确认是否被异常访问"
      ],
      "commands": [
        "uptime",
        "top",
        "free -h",
        "df -h",
        "ps aux --sort=-%cpu | head"
      ]
    }
  ],
  "routes": [
    {
      "title": "小白入门路线",
      "desc": "电脑基础 → 网络基础 → Linux 基础",
      "stageIds": [
        "basic",
        "network",
        "linux"
      ]
    },
    {
      "title": "服务器建站路线",
      "desc": "服务器 → Nginx → 域名 → HTTPS → 排错",
      "stageIds": [
        "server",
        "web",
        "ops"
      ]
    },
    {
      "title": "Linux 运维路线",
      "desc": "Linux 命令 → 服务管理 → 日志 → 排错",
      "stageIds": [
        "linux",
        "server",
        "ops"
      ]
    },
    {
      "title": "Docker 路线",
      "desc": "容器基础 → 端口映射 → Compose → 项目部署",
      "stageIds": [
        "docker",
        "project"
      ]
    },
    {
      "title": "网络安全入门路线",
      "desc": "网络基础 → 服务器安全 → 日志检查 → 加固",
      "stageIds": [
        "network",
        "server",
        "security"
      ]
    },
    {
      "title": "项目实战路线",
      "desc": "把前面的知识用于真实项目",
      "stageIds": [
        "web",
        "db",
        "docker",
        "project"
      ]
    }
  ],
  "projects": [
    {
      "title": "部署个人主页",
      "level": "入门",
      "desc": "Nginx + HTML + 域名 + HTTPS，从 0 到上线。",
      "steps": [
        "准备服务器",
        "安装 Nginx",
        "创建 index.html",
        "解析域名",
        "配置 HTTPS",
        "验证访问"
      ],
      "check": "浏览器打开域名能看到自己的页面。"
    },
    {
      "title": "部署 WordPress",
      "level": "进阶",
      "desc": "完成一套常见动态网站部署流程。",
      "steps": [
        "安装 Nginx/PHP/MySQL",
        "创建数据库",
        "上传程序",
        "配置站点",
        "完成安装",
        "设置备份"
      ],
      "check": "WordPress 后台可以登录，前台可以访问。"
    },
    {
      "title": "Docker 部署网站",
      "level": "进阶",
      "desc": "用容器方式运行网站服务。",
      "steps": [
        "安装 Docker",
        "拉取镜像",
        "运行容器",
        "映射端口",
        "挂载目录",
        "查看日志"
      ],
      "check": "通过宿主机端口访问容器网站。"
    },
    {
      "title": "服务器安全加固",
      "level": "实用",
      "desc": "做一套基础服务器防护清单。",
      "steps": [
        "改强密码",
        "关闭无用端口",
        "配置防火墙",
        "检查登录日志",
        "更新系统",
        "备份配置"
      ],
      "check": "开放端口清晰，登录日志无异常。"
    },
    {
      "title": "网站打不开排查",
      "level": "实战",
      "desc": "按标准流程定位问题。",
      "steps": [
        "确认现象",
        "检查解析",
        "检查服务",
        "检查端口",
        "检查安全组",
        "查看日志"
      ],
      "check": "能写出故障原因和解决步骤。"
    },
    {
      "title": "MySQL 备份恢复",
      "level": "实用",
      "desc": "学会数据库最基础的保命操作。",
      "steps": [
        "确认数据库名",
        "执行备份",
        "保存备份文件",
        "模拟恢复",
        "验证数据",
        "记录周期"
      ],
      "check": "能从备份文件恢复数据。"
    }
  ],
  "glossary": [
    {
      "term": "IP",
      "desc": "网络中的地址，像门牌号。"
    },
    {
      "term": "端口",
      "desc": "服务器上的服务入口，像门号。"
    },
    {
      "term": "DNS",
      "desc": "把域名解析成 IP 的系统。"
    },
    {
      "term": "SSH",
      "desc": "远程连接 Linux 服务器的常用协议。"
    },
    {
      "term": "Nginx",
      "desc": "常用网站服务器和反向代理软件。"
    },
    {
      "term": "MySQL",
      "desc": "常用关系型数据库。"
    },
    {
      "term": "Docker",
      "desc": "容器化工具，把应用和环境打包运行。"
    },
    {
      "term": "日志",
      "desc": "系统或程序记录运行状态和错误的文件。"
    },
    {
      "term": "安全组",
      "desc": "云服务器平台上的端口访问控制。"
    },
    {
      "term": "防火墙",
      "desc": "服务器系统中的访问控制。"
    }
  ]
};