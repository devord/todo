module Main exposing (main)

import Browser
import Element exposing (Element, fill)
import Html exposing (Html)
import Http
import Json.Decode exposing (Decoder, field, int, list, map2, string)
import RemoteData exposing (RemoteData(..), WebData)



---- MODEL ----


type alias Item =
    { title : String
    , id : Int
    }


type alias Items =
    List Item


decodeItem : Decoder Item
decodeItem =
    Json.Decode.map2 Item
        (field "title" string)
        (field "id" int)


decodeItems : Decoder Items
decodeItems =
    field "results" (list decodeItem)


getItems : Cmd Msg
getItems =
    Http.get
        { url = "/api/items/"
        , expect = Http.expectJson (RemoteData.fromResult >> ItemsResponse) decodeItems
        }


type alias Model =
    { items : WebData Items }


init : ( Model, Cmd Msg )
init =
    ( { items = Loading }
    , getItems
    )



---- UPDATE ----


type Msg
    = ItemsResponse (WebData Items)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        ItemsResponse response ->
            ( { model | items = response }
            , Cmd.none
            )



---- VIEW ----


viewItemsTable : Items -> Element Msg
viewItemsTable items =
    Element.table []
        { data = items
        , columns =
            [ { header = Element.text "ID"
              , width = fill
              , view = \i -> Element.text (String.fromInt i.id)
              }
            , { header = Element.text "Title"
              , width = fill
              , view = \i -> Element.text i.title
              }
            ]
        }


viewMaybeItemsTable : Model -> Element Msg
viewMaybeItemsTable model =
    case model.items of
        NotAsked ->
            Element.text "Initialising..."

        Loading ->
            Element.text "Loading..."

        Failure _ ->
            Element.text "Oops! Something went wrong."

        Success items ->
            viewItemsTable items


view : Model -> Html Msg
view model =
    Element.layout []
        (viewMaybeItemsTable model)



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , init = \_ -> init
        , update = update
        , subscriptions = always Sub.none
        }
