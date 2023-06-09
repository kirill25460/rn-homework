import React, { memo } from "react";

import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
import ProfileDetails from "./ProfileDetails";

function Post({
  navigation,
  title,
  image,
  comments,
  longitude,
  latitude,
  country: postCountry,
  city,
  postId,
  avatarImage: postAvatarImage,
  login: postLogin,
}) {
  return (
    <View style={styles.post}>
      <ProfileDetails
        image={image}
        postCountry={postCountry}
        postAvatarImage={postAvatarImage}
        postLogin={postLogin}
      />
      <Image
        source={{ uri: image, height: 300, width: "100%" }}
        style={styles.postImg}
      />

      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postFooter}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() =>
            navigation.navigate("CommentsScreen", {
              image,
              postId,
              postCountry,
              postAvatarImage,
              postLogin,
            })
          }
        >
          <View style={styles.postCommentThmb}>
            <FontAwesome5
              style={styles.postCommentIcon}
              name="comment"
              size={18}
              color={comments > 0 ? "orange" : "grey"}
              // color="orange"
            />
            <Text style={styles.postCommentNumber}>{comments}</Text>
          </View>
        </TouchableOpacity>
        {latitude && longitude && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate("MapScreen", { latitude, longitude })
            }
          >
            <View style={styles.postLocationThmb}>
              <Feather
                name="map-pin"
                style={styles.postLocationIcon}
                size={18}
                color="orange"
              />
              <Text style={styles.postLocationTitle}>
                {postCountry}, {city}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default memo(Post);

const styles = StyleSheet.create({
  post: {
    marginBottom: 32,
  },
  postImg: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    marginBottom: 9,
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postCommentThmb: {
    flexDirection: "row",
  },
  postCommentIcon: {
    marginRight: 9,
  },
  postCommentNumber: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
  },

  postLocationThmb: {
    flexDirection: "row",
  },
  postLocationIcon: {
    marginRight: 9,
  },
  postLocationTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "400",
    color: "#212121",
    fontFamily: "Roboto-Regular",
    textDecoration: "underlin",
    color: "grey",
  },
});