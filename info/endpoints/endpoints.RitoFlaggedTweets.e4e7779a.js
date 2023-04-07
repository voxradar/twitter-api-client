(self.webpackChunk_twitter_responsive_web =
  self.webpackChunk_twitter_responsive_web || []).push([
  ["endpoints.RitoFlaggedTweets"],
  {
    4149: (e) => {
      e.exports = {
        queryId: "JBP2-HfsjcvEj3lRhuNixg",
        operationName: "RitoFlaggedTweetsTimeline",
        operationType: "query",
        metadata: {
          featureSwitches: [
            "blue_business_profile_image_shape_enabled",
            "responsive_web_graphql_exclude_directive_enabled",
            "verified_phone_label_enabled",
            "responsive_web_graphql_timeline_navigation_enabled",
            "responsive_web_graphql_skip_user_profile_image_extensions_enabled",
            "tweetypie_unmention_optimization_enabled",
            "vibe_api_enabled",
            "responsive_web_edit_tweet_api_enabled",
            "graphql_is_translatable_rweb_tweet_is_translatable_enabled",
            "view_counts_everywhere_api_enabled",
            "longform_notetweets_consumption_enabled",
            "tweet_awards_web_tipping_enabled",
            "freedom_of_speech_not_reach_fetch_enabled",
            "standardized_nudges_misinfo",
            "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled",
            "interactive_text_enabled",
            "responsive_web_text_conversations_enabled",
            "longform_notetweets_richtext_consumption_enabled",
            "responsive_web_enhance_cards_enabled",
          ],
        },
      };
    },
    89910: (e, _, t) => {
      "use strict";
      t.r(_),
        t.d(_, {
          default: () => d,
          isFatalRitoFlaggedTweetsTimelineError: () => o,
        });
      var i = t(72599),
        n = t(17360),
        s = t(83175),
        l = t(4149),
        r = t.n(l),
        a = t(82249);
      const o = (e, _) => {
          var t;
          const s =
            null == _ || null == (t = _.user_result_by_rest_id)
              ? void 0
              : t.result;
          return (
            s ||
              (0, i.ZP)(
                "GQL RitoFlaggedTweets: Failed to query for Rito Flagged Tweets timeline"
              ),
            !s && (0, n.jB)(e)
          );
        },
        d = ({ apiClient: e, featureSwitches: _ }) => ({
          fetchRitoFlaggedTweets: ({ cursor: t, userId: i }) =>
            e
              .graphQL(
                r(),
                {
                  cursor: t,
                  rest_id: i,
                  ...(0, s.d)(_),
                  withSafetyModeUserFields: _.isTrue(
                    "rito_safety_mode_blocked_profile_enabled"
                  ),
                },
                o
              )
              .then((e) => {
                var _;
                const t =
                  null == e || null == (_ = e.user_result_by_rest_id)
                    ? void 0
                    : _.result;
                let i = a.cY;
                var n;
                "User" === (null == t ? void 0 : t.__typename) &&
                  (i =
                    null == (n = t.rito_flagged_tweets_timeline)
                      ? void 0
                      : n.timeline);
                return i || a.cY;
              }),
        });
    },
  },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/endpoints.RitoFlaggedTweets.e4e7779a.js.map