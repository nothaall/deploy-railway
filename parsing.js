const getItems = async (hashTag) => {
    const response = await fetch(`https://www.instagram.com/api/v1/fbsearch/web/top_serp/?enable_metadata=true&query=%23${hashTag}&rank_token=14aedf68-781d-4bc5-9605-13b9987d9bd7`, {
        "headers": {
          "accept": "*/*",
          "accept-language": "ru,en;q=0.9",
          "priority": "u=1, i",
          "sec-ch-prefers-color-scheme": "light",
          "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"YaBrowser\";v=\"25.2\", \"Yowser\";v=\"2.5\"",
          "sec-ch-ua-full-version-list": "\"Not A(Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"132.0.6834.887\", \"YaBrowser\";v=\"25.2.1.887\", \"Yowser\";v=\"2.5\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-model": "\"\"",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-ch-ua-platform-version": "\"15.0.0\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-asbd-id": "359341",
          // "x-csrftoken": "3LtXhFXeSZygRtwNlwfaWesdQIYNEFQO",
          "x-ig-app-id": "936619743392459",
          // "x-ig-www-claim": "hmac.AR3c4ONSaMKG18yrFof3-t5iqkE_qOEAseFRJ26W33nTaq-d",
          "x-requested-with": "XMLHttpRequest",
          // "x-web-session-id": "8z19v7:exz0c4:j84287",
          "cookie": "ds_user_id=67631790054; sessionid=67631790054%3AJiKagh9i3W6MIW%3A23%3AAYd2__1g_DkvhFXJcfhcOkkDFUF-9GrjAIK0e7yE8Q;",
          "Referer": "https://www.instagram.com/explore/search/keyword/?q=%23ramadan",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      }).then(response => response.json());

    console.log(response);

    return response.media_grid.sections;
};

const getResponses = async (count) => {
    const responses = [];

    let nextId = 'c51fd6e88b4547678e4676f564e679ab';

    for (let index = 0; index < count; index++) {
        const response = await fetch(`https://www.instagram.com/api/v1/fbsearch/web/top_serp/?enable_metadata=true&query=%23dolbaeb&next_max_id=${nextId}&rank_token=14aedf68-781d-4bc5-9605-13b9987d9bd7`, {
            "headers": {
              "accept": "*/*",
              "accept-language": "ru,en;q=0.9",
              "priority": "u=1, i",
              "sec-ch-prefers-color-scheme": "light",
              "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"YaBrowser\";v=\"25.2\", \"Yowser\";v=\"2.5\"",
              "sec-ch-ua-full-version-list": "\"Not A(Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"132.0.6834.887\", \"YaBrowser\";v=\"25.2.1.887\", \"Yowser\";v=\"2.5\"",
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-model": "\"\"",
              "sec-ch-ua-platform": "\"Windows\"",
              "sec-ch-ua-platform-version": "\"15.0.0\"",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-asbd-id": "359341",
              // "x-csrftoken": "3LtXhFXeSZygRtwNlwfaWesdQIYNEFQO",
              "x-ig-app-id": "936619743392459",
              // "x-ig-www-claim": "hmac.AR3c4ONSaMKG18yrFof3-t5iqkE_qOEAseFRJ26W33nTaq-d",
              "x-requested-with": "XMLHttpRequest",
              // "x-web-session-id": "8z19v7:exz0c4:j84287",
              "cookie": "ds_user_id=67631790054; sessionid=67631790054%3AJiKagh9i3W6MIW%3A23%3AAYd2__1g_DkvhFXJcfhcOkkDFUF-9GrjAIK0e7yE8Q;",
              "Referer": "https://www.instagram.com/explore/search/keyword/?q=%23ramadan",
              "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": null,
            "method": "GET"
          }).then(response => response.json());

        nextId = response.media_grid.next_max_id;

        responses.push(response);

        console.log(response);
    }

    return responses;
};

// getResponses().then(console.log);

// csrftoken=3LtXhFXeSZygRtwNlwfaWesdQIYNEFQO;
// rur=\"LLA\\05467631790054\\0541772405904:01f73b5dc21984c9d8b04f412e8109767e6362d0c7b7c8858e971fb77042098531710114\"
// wd=780x956;
// ps_n=1;
// ps_l=1;
// mid=Z7_ACQALAAFod7ql5EPciTljPJc9;
// ig_did=329F1501-9B8C-48CE-9201-86220DA658AB;
// datr=CcC_Z7rk2LGMO6sgrtEONODM;

module.exports = { getItems };

// getItems('dolbaeb', 'c51fd6e88b4547678e4676f564e679ab');
