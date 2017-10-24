<?php

namespace App\Listeners;

use App\Contracts\PortfolioSymbolRepository;
use App\Events\BuyingTransactionCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CalculateSymbolAverageAmount
{
    /**
     * The portfolioSymbols instance.
     */
    protected $portfolioSymbols;

    /**
     * Create the event listener.
     *
     * @param  App\Contracts\PortfolioSymbolRepository  $portfolioSymbols
     * @return void
     */
    public function __construct(PortfolioSymbolRepository $portfolioSymbols)
    {
        $this->portfolioSymbols = $portfolioSymbols;
    }

    /**
     * Handle the event.
     *
     * @param  BuyingTransactionCreated  $event
     * @return void
     */
    public function handle(BuyingTransactionCreated $event)
    {
        $portfolioSymbol = $event->transaction->portfolioSymbol;

        $portfolioSymbol->AddShare($event->transaction->share);

        $totalAmount = $portfolioSymbol->totalAverage->add($event->transaction->totalPrice);

        $data['average'] = $totalAmount->divide($data['share'])->getAmount();

        $portfolioSymbol->update();
    }
}