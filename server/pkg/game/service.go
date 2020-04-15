package game

import (
	"context"
	"github.com/petomalina/multiplayer-clicker/apis/go/v1"
)

type GameService struct {
}

func (s GameService) Play(ctx context.Context, request *apis.PlayRequest) (*apis.PlayResponse, error) {
	return &apis.PlayResponse{
		Token: "player-token",
	}, nil
}

func (s GameService) GetStreamingBroadcast(request *apis.StateRequest, server apis.GameService_GetStreamingBroadcastServer) error {
	panic("implement me")
}

func (s GameService) Buy(ctx context.Context, request *apis.BuyRequest) (*apis.BuyResponse, error) {
	panic("implement me")
}

func (s GameService) Attack(ctx context.Context, request *apis.AttackRequest) (*apis.AttackResponse, error) {
	panic("implement me")
}
